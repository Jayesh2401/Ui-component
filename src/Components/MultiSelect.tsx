import { join } from "path";
import React, { useState, useEffect, useRef } from "react";

interface Option {
  value: string;
  label: string;
}

interface SearchableMultiSelectProps {
  options: {
    value: string;
    label: string;
  }[];
  selectedOptions: {
    value: string;
    label: string;
  }[];
  width?: number;
  placeholder?: string;
  defaultOption?: {
    value: string;
    label: string;
  };
  onSelect?: (option: Option) => any;
  onDeselect?: (option: Option) => any;
}

const MultiSelect: React.FC<SearchableMultiSelectProps> = ({
  options,
  width,
  placeholder,
  onSelect,
  onDeselect,
  selectedOptions,
}) => {
  const optionsListRef = useRef<HTMLUListElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  const multiSelectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [placeHolders, setplaceHolders] = useState(
    placeholder || "Select option"
  );
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const isOptionSelected = (option: Option) =>
    selectedOptions.some((selected) => selected.value === option.value);

  // const filteredOptions = options.filter((option) => {
  //   const searchTerms = searchTerm?.split(",").map((term) => term.trim());
  //   return searchTerms.some((term) =>
  //     option.label.toLowerCase().includes(term.toLowerCase())
  //   );
  // });

  const filteredOptions = options.filter((option) => {
    const searchTerms = searchTerm?.split(",").map((term) => term.trim());
    return (
      !selectedOptions.some((selected) => selected.value === option.value) &&
      searchTerms.some((term) =>
        option.label.toLowerCase().includes(term.toLowerCase())
      )
    );
  });
  

  const handleSelect = (option: Option) => {
    //one case pending if selected item serached focus to be gone there
    if (!option) return;

    const isOptionSelected = selectedOptions?.some(
      (selected) => selected.value === option.value
    );

    if (isOptionSelected) {
      onDeselect?.(option);
    } else {
      onSelect?.(option);
    }

    setSearchTerm("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsOpen(true);

    if (filteredOptions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredOptions.length - 1
        );
        break;
      case "Enter":
        if (focusedIndex !== -1) {
          handleSelect(filteredOptions[focusedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      case "Backspace":
        if (searchTerm === "" && selectedOptions.length > 0) {
          const lastSelectedOption =
            selectedOptions[selectedOptions.length - 1];
          onDeselect?.(lastSelectedOption);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (
      focusedIndex !== -1 &&
      optionsListRef.current &&
      optionsContainerRef.current
    ) {
      const listItem = optionsListRef.current.children[
        focusedIndex
      ] as HTMLElement;
      if (listItem) {
        listItem.scrollIntoView({
          block: "nearest",
          inline: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [focusedIndex]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        multiSelectRef.current &&
        !multiSelectRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div
      ref={multiSelectRef}
      className="searchable-select relative"
      style={{ width: `${width ? `${width}px` : "100%"}` }}
    >
      <div
        className={`select-box border rounded cursor-pointer ${
          isOpen ? "border-purple-500" : "border-gray-400"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <div
          className={`selected-options flex flex-wrap gap-1 ${
            selectedOptions.length > 0 && "p-2"
          } `}
        >
          {selectedOptions.map((option) => (
            <div
              key={option.value}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(option);
              }}
              className="selected-option bg-purple-100 rounded-full flex items-center px-2 py-1 text-white-500 cursor-pointer"
            >
              {option.label}{" "}
              <span
                className="ml-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeselect?.(option);
                }}
              >
                ✕
              </span>
            </div>
          ))}
          <input
            type="text"
            className={`rounded placeholder:text-gray-400 flex-[1] ${
              selectedOptions.length > 0 ? "w-auto" : "w-full"
            } p-2 h-full focus:border-0 border-0 outline-none focus:outline-none`}
            placeholder={
              selectedOptions.length > 0
                ? ""
                : placeHolders
                ? placeholder
                : "Select option"
            }
            value={searchTerm}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
          />
        </div>
        <div
          ref={optionsContainerRef}
          className={`options left-0 top-[40px] max-h-[150px] overflow-y-auto absolute w-full bg-white border rounded ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul ref={optionsListRef}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${
                    focusedIndex === index ? "bg-purple-100" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                  <span>
                    {isOptionSelected(option) && (
                      <span className="ml-1">✔</span>
                    )}
                  </span>
                </li>
              ))
            ) : (
              <div className="p-2 text-gray-500">Option not found</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;

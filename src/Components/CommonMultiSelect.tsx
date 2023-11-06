import React, { useState, useEffect, useRef } from "react";
import "../MultiSelect.css";
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

const CommonMultiSelect: React.FC<SearchableMultiSelectProps> = ({
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
      className="MultiSelect_container"
      style={{ width: `${width ? `${width}px` : "100%"}` }}
    >
      <div
        className={`MultiSelect_wrapper ${
          isOpen ? "MultiSelect_box_active" : "MultiSelect_box_inactive"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <div
          className={`MultiSelect_items_wrapper ${
            selectedOptions.length > 0 && "MultiSelect_padding"
          } `}
        >
          {selectedOptions.map((option) => (
            <div
              key={option.value}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(option);
              }}
              className="MultiSelect_list"
            >
              {option.label}{" "}
              <span
                className="MultiSelect_list_child"
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
            className={`MultiSelect_input ${
              selectedOptions.length > 0 ? "w_auto" : "w_full"
            } `}
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
          className={`MultiSelect_options ${
            selectedOptions.length > 0 && "MultiSelect_onselected"
          }  ${isOpen ? "block" : "hidden"}`}
        >
          <ul ref={optionsListRef}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  className={`MultiSelect_optionlist ${
                    focusedIndex === index ? "MultiSelect_optionlist_focus" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                  <span>
                    {isOptionSelected(option) && (
                      <span style={{ marginLeft: "0.5rem" }}>✔</span>
                    )}
                  </span>
                </li>
              ))
            ) : (
              <div className="MultiSelect_notfound">Option not found</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonMultiSelect;

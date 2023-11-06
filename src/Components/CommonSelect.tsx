import React, { useState, useEffect, useRef } from "react";
import "../Select.css";
interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: {
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
}

const CommonSelect: React.FC<SearchableSelectProps> = ({
  options,
  width,
  placeholder,
  defaultOption,
  onSelect,
}) => {
  const optionsListRef = useRef<HTMLUListElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultOption || null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [placeHolders, setplaceHolders] = useState(defaultOption?.label || "");
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    onSelect?.(option);
    setSelectedOption(option);
    setplaceHolders(option?.label);
    setIsOpen(false);
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
      default:
        break;
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        optionsContainerRef.current &&
        !optionsContainerRef.current.contains(e.target as Node)
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

  return (
    <div
      className="select_container"
      style={{ width: `${width ? `${width}px` : "100%"}` }}
    >
      <div
        className={`select_box ${
          isOpen ? "select_box_focus" : "select_box_nofocus"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          className="select_input"
          placeholder={placeHolders || placeholder || "Select option"}
          value={searchTerm}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
        />
        <div
          ref={optionsContainerRef}
          className={`select_items ${isOpen ? "block" : "hidden"}`}
        >
          <ul ref={optionsListRef}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  className={`select_list ${
                    focusedIndex === index ? "select_list_focus" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <div className="select_notfound">Option not found</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonSelect;

import React, { useState, useEffect, useRef } from "react";

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

const Select: React.FC<SearchableSelectProps> = ({
  options,
  width,
  placeholder,
  defaultOption,
  onSelect
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
    <div className="searchable-select relative" style={{ width: `${width ? `${width}px` : '100%'}` }}>
      <div
        className={`select-box  border rounded cursor-pointer ${isOpen ? "border-blue-500" : "border-gray-400"
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          className="rounded placeholder:text-gray-900 w-full p-2 h-full focus:border-0 border-0 outline-none focus:outline-none"
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
          className={`options left-0 top-[40px] max-h-[150px] overflow-y-auto absolute w-full bg-white border rounded ${isOpen ? "block" : "hidden"
            }`}
        >
          <ul ref={optionsListRef}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${focusedIndex === index ? "bg-blue-100" : ""
                    }`}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
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

export default Select;

import React, { useState } from "react";
import MultiSelect from "../Components/MultiSelect";

const MultiSelection: React.FC = () => {
  interface Option {
    value: string;
    label: string;
  }

  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
    { value: "option9", label: "Option 9" },
    { value: "option10", label: "Option 10" },
  ];

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleSelect = (option: Option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const isOptionSelected = prevSelectedOptions.some(
        (selected) => selected.value === option.value
      );

      if (isOptionSelected) {
        return prevSelectedOptions.filter(
          (selected) => selected.value !== option.value
        );
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Multi-Select Dropdown</h1>
      <MultiSelect
        options={options}
        placeholder="Select options"
        selectedOptions={selectedOptions}
        onSelect={handleSelect}
        onDeselect={handleSelect}
      />
      <div className="my-4">
        <strong>Selected Options:</strong>
        <ul>
          {selectedOptions?.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelection;

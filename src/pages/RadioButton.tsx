import React, { useState } from "react";
import RadioButtonToggle from "../Components/RadioButtonToggle";

const RadioButton: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<RadioOption>();

  interface RadioOption {
    label: string;
    value: string | number;
  }

  const handleOptionChange = (value: RadioOption) => {
    setSelectedOption(value);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Radio Button Toggle Example
      </h1>
      <RadioButtonToggle
        options={options}
        selectedValue={selectedOption}
        onChange={handleOptionChange}
      />
      <p>Selected Option: {selectedOption?.label}</p>
    </div>
  );
};

export default RadioButton;

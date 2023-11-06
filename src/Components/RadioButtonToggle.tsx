import React from "react";

interface RadioOption {
  label: string;
  value: string | number;
}

interface RadioButtonToggleProps {
  options?: RadioOption[];
  selectedValue?: RadioOption;
  onChange?: (value: RadioOption) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioButtonToggleProps> = ({
  options,
  selectedValue,
  onChange,
  className,
  ...rest
}) => {
  const handleOptionChange = (value: RadioOption) => {
    onChange?.(value);
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {options?.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="radio"
            value={option.value}
            checked={option.value === selectedValue?.value}
            onChange={() => handleOptionChange(option)}
            className="form-radio h-4 w-4 text-blue-500"
            {...rest}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;

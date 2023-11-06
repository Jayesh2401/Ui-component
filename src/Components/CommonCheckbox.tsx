import React from "react";

interface CommonCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  id?: any;
  className?: string | null;
  [rest: string]: any;
}

const CommonCheckbox: React.FC<CommonCheckboxProps> = ({
  checked,
  onChange,
  label,
  id,
  className,
  ...rest
}) => {
  const handleChange = () => {
    onChange?.(!checked);
  };

  return (
    <label htmlFor={id} className="flex w-fit hover:cursor-pointer items-center space-x-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={`disabled:curs h-5 w-5  ${className || ''}`}
        {...rest}
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
};

export default CommonCheckbox;

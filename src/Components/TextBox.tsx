import React, { Dispatch, SetStateAction } from "react";



interface CommonTextBoxProps {
  label?: string;
  value?: string;
  onChange?: Dispatch<SetStateAction<object>>;
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
  required?: boolean;
  inputMode?: InputModes;
  autoComplete?: AutoComplete;
  id?: string;
  maxLength?: number;
  className?: string;
  name?: string;
  error?: string,
  [rest: string]: any;
}

type InputType =
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

type InputModes =
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url"
  | "none";

type AutoComplete = "on" | "off";

const InputField: React.FC<CommonTextBoxProps> = ({
  label,
  value,
  onChange = null,
  placeholder,
  type = "text",
  disabled,
  required,
  inputMode,
  autoComplete,
  id,
  maxLength,
  className,
  name,
  error,
  height,
  ...rest
}) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const defaultClassName = 'border-black border p-2 rounded-md';

  return (
    <div className="relative ">
      <div className="text-base mb-0.5">
        {label}
        {required && label && !disabled && (
          <span className="text-red-400"> &#42;</span>
        )}
      </div>

      <input
        name={name}
        type={type || 'text'}
        {...(value !== '' && { value: value })}
        {...(onChange && { onChange: handleInputChange })}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        inputMode={inputMode}
        autoComplete={autoComplete}
        id={id}
        maxLength={maxLength}
        className={`disabled:cursor-not-allowed ${defaultClassName} ${className || ''} `}
        {...rest}

      />
      {error && (
        <p
          className={`text-xs text-red-600`}>{error}</p>
      )}
    </div>
  );
};

export default InputField;

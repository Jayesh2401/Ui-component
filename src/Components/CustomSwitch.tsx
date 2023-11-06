interface CustomSwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  [rest: string]: any;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  checked,
  onChange,
  label,
  id,
  className,
  disabled = false,
  ...rest
}) => {
  const handleChange = () => {
    onChange?.(!checked);
  };

  return (
    <div className={`flex relative w-fit items-center space-x-2 `}>
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className={` w-[3.3rem] h-[30px] p-[2px]
         bg-gray-100 checked:bg-none checked:bg-blue-600 
          rounded-full cursor-pointer transition-colors
           ease-in-out duration-200 border border-transparent ring-1
           ring-transparent focus:border-blue-600 focus:ring-blue-600
         ring-offset-white focus:outline-none appearance-none dark:bg-gray-700
          dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block
           before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 
           before:translate-x-0 checked:before:translate-x-full before:shadow 
           before:rounded-full before:transform before:ring-0 before:transition 
           before:ease-in-out before:duration-200 dark:before:bg-gray-400
            dark:checked:before:bg-blue-200 ${className} 
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          {...rest}
        />
      </div>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default CustomSwitch;

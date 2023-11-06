import React from "react";

interface CustomSliderProps {
  label?: string;
  min: number;
  max: number;
  step?: number;
  value?: number;
  size?: string;
  trackSize?: string;
  emptyTrackColor?: string;
  filledTrackColor?: string;
  thumbColor?: string;
  orientation?: "horizontal" | "vertical";
  isDisabled?: boolean;
  className?: string;
  rest?: any;
  onChange?: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  label,
  min,
  max,
  step = 1,
  size = "w-64",
  value,
  trackSize = "h-2",
  emptyTrackColor = "bg-gray-300",
  filledTrackColor = "bg-purple-500",
  thumbColor = "bg-white",
  orientation = "horizontal",
  isDisabled = false,
  onChange,
  className = "",
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    
    onChange?.(newValue);  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && <label className="text-sm">{label}</label>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        disabled={isDisabled}
        className={`mi-input ${size} ${trackSize} ${emptyTrackColor} ${
          orientation === "vertical" ? "transform rotate-90" : ""
        }`}
        onChange={handleChange}
        {...rest}
      />
      <div
        className={`${size} ${trackSize} absolute top-0 ${filledTrackColor} transform-gpu ${
          orientation === "vertical" ? "rotate-90" : ""
        }`}
        style={{
          width:
            "calc((100% - 16px) * (var(--value) - var(--min)) / (var(--max) - var(--min)))",
        }}
      ></div>
      <div
        className={`${size} ${trackSize} ${thumbColor} absolute top-0 left-0 ${
          orientation === "vertical" ? "rotate-90" : ""
        }`}
        style={{
          transform: "translate(-50%, -50%)",
          left: `calc((100% - 16px) * (var(--value) - var(--min)) / (var(--max) - var(--min)))`,
        }}
      ></div>
    </div>
  );
};

export default CustomSlider;

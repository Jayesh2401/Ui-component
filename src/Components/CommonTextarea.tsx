import React, { TextareaHTMLAttributes } from "react";

type Size = "small" | "medium" | "large";

interface CommonTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variation?: "box" | "bottom-line";
  size?: Size;
  label?: string;
  disable?: boolean;
  className?: string;
  maxHeight?: number;
  containerClass?: string;
  placeHolder?: string;
  labelClass?: string;
}

const CommonTextarea: React.FC<CommonTextareaProps> = ({
  variation = "box",
  size = "medium",
  label,
  disable = false,
  maxHeight,
  className,
  placeHolder,
  labelClass,
  containerClass,
  ...rest
}) => {
  const containerClasses = `relative ${variation === "box" ? "border" : ""} ${size === "small"
    ? "py-1 px-2 "
    : size === "large"
      ? "py-3 px-4 "
      : "py-2 px-3 "
    } ${disable ? "bg-gray-200" : "bg-white"} rounded ${variation === "bottom-line" ? "border-b-2" : ""
    } ${containerClass}  `;

  const textareaClasses = ` w-full outline-none ${className}`;

  return (
    <div>
      {label && (
        <label className={`block mb-1 text-sm ${labelClass}`}>{label}</label>
      )}
      <div className={containerClasses}>
        <textarea
          placeholder={placeHolder}
          className={textareaClasses}
          disabled={disable}
          {...rest} />
      </div>
    </div>
  );
};

export default CommonTextarea;

import React from "react";

interface CustomTooltipProps {
  text: string;
  placement?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  text,
  placement = "top",
  children,
}) => {
  return (
    <div className="relative inline-block">
      {children}
      <div
        className={`absolute z-10 px-2 py-1 text-white bg-gray-700 rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 ${
          (placement === "top" && "-top-8 left-1/2 -translate-x-1/2") ||
          (placement === "bottom" && "top-8 left-1/2 -translate-x-1/2") ||
          (placement === "left" && "top-1/2 right-8 -translate-y-1/2") ||
          (placement === "right" && "top-1/2 left-8 -translate-y-1/2")
        } ${
          (placement === "top" && "transform -translate-y-2") ||
          (placement === "bottom" && "transform translate-y-2") ||
          (placement === "left" && "transform -translate-x-2") ||
          (placement === "right" && "transform translate-x-2")
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default CustomTooltip;

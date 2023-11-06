import React from "react";

interface BadegsComponentProps {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  icon?: React.ReactNode;
  textColor?: string;
  className?: string;
}

const BadegsComponent: React.FC<BadegsComponentProps> = ({
  text,
  backgroundColor = "transparent",
  borderColor,
  icon,
  textColor = "black",
  className,
}) => {
  return (
    <div
      className={`inline-flex items-center px-2 py-1 rounded-full border-2 ${backgroundColor} ${borderColor} ${textColor} ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span className={`${text.trim().length > 0 && "ml-2"}`}>{text}</span>
    </div>
  );
};

export default BadegsComponent;

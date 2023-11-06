import React from "react";

interface ToasterProps {
  position: position;
  type: type;
  message: string;
}

type type = "success" | "error" | "info" | "warning";
type position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export const toast = (type: type, position: position, message: string) => {
  const toastContainer = document.createElement("div");
  toastContainer.className = `fixed ${getPositionClass(position)} p-4`;

  const toastElement = document.createElement("div");
  const toastTypeClass = `${
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-[#ef4444]"
      : type === "info"
      ? "bg-blue-500"
      : "bg-yellow-500"
  }`;
  toastElement.className = `min-w-[300px] text-white p-3 rounded-md shadow-lg ${toastTypeClass}`;
  toastElement.textContent = message;

  // Apply initial transition properties
  toastElement.style.opacity = "0";
  toastElement.style.transform = "translateY(20px)";
  toastElement.style.transition = "opacity 0.3s, transform 0.3s";

  toastContainer.appendChild(toastElement);
  document.body.appendChild(toastContainer);

  // Trigger reflow to apply initial transition properties
  toastElement.getBoundingClientRect();

  // Transition to fully visible
  toastElement.style.opacity = "1";
  toastElement.style.transform = "translateY(0)";
  toastElement.style.cursor = "pointer";

  setTimeout(() => {
    toastElement.style.opacity = "0";
    toastElement.style.transform = "translateY(20px)";
    setTimeout(() => {
        toastContainer.remove();
    }, 300);
  }, 3000);

  toastElement.onclick = () => {
    toastElement.style.opacity = "0";
    toastElement.style.transform = "translateY(20px)";
  };
};

const getPositionClass = (position: position) => {
  switch (position) {
    case "top-left":
      return "top-0 left-0";
    case "top-center":
      return "top-0 left-1/2 transform -translate-x-1/2";
    case "top-right":
      return "top-0 right-0";
    case "bottom-left":
      return "bottom-0 left-0";
    case "bottom-center":
      return "bottom-0 left-1/2 transform -translate-x-1/2";
    case "bottom-right":
      return "bottom-0 right-0";
    default:
      return "top-0 right-0";
  }
};

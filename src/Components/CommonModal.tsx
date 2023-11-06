import React, { useEffect, useCallback } from "react";

interface CommonModalProps {
  title?: string;
  ModalParent?: string;
  ModalContent?: string;
  children?: React.ReactNode;
  onClose: () => void;
  onSave?: () => void;
  position?: position;
}

type position = "top-center" | "center";

const CommonModal: React.FC<CommonModalProps> = ({
  title,
  children,
  onClose,
  onSave,
  position,
  ModalParent,
  ModalContent,
}) => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
        onClose();
      }
    },
    [onClose]
  );

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleEscapeKey, handleOutsideClick]);

  return (
    <div
      className={`modal-overlay transition-all duration-150 fixed inset-0 flex ${
        position === "center" ? "items-center" : "pt-8 items-start"
      } justify-center bg-gray-500 bg-opacity-50`}
    >
      <div
        className={`modal-container bg-white w-96  m-4 rounded shadow ${ModalParent} `}
      >
        <div className={`modal-header flex justify-between p-4 items-center mb-4`}>
          {title && <h2 className="modal-title text-xl font-bold">{title}</h2>}
          <button
            className="modal-close-button text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &#215;
          </button>
        </div>
        <div className={`modal-content p-2 ${ModalContent} `}>{children}</div>

        <div className="modal-footer mt-4 flex justify-end p-4">
          {onSave && (
            <button
              className="modal-button mr-3 bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 rounded"
              onClick={onSave}
            >
              save
            </button>
          )}
          <button
            className="modal-button bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;

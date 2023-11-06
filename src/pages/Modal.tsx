import React, { useState } from "react";
import CommonModal from "../Components/CommonModal";
import { toast } from "../Components/Toaster";

const Modal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveAction = () => {
    toast("success", "top-right", "Save succesfully");
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="border p-3 bg-purple-200 rounded-3xl font-medium outline-none"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <CommonModal
          title="Sample Modal"
          onClose={closeModal}
          onSave={saveAction}
          position="top-center"
          ModalParent="w-[600px]"
          ModalContent="border"
        >
          <p>This is the content of the modal.</p>
        </CommonModal>
      )}
    </div>
  );
};

export default Modal;

// Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg p-5 max-w-xl max-h-full overflow-auto">
        <button onClick={onClose} className="float-right text-xl font-bold">
          &times;
        </button>
        <div className="clear-both"></div>
        <img src={content} alt="Certificate" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Modal;

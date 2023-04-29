import React from "react";
import "./CarModal.css";

const CarModal = ({ setOpenModal, openModal }) => {
  return (
    <div className="car-modal">
      {/* Close button */}
      <button
        className="car-modal-close-button"
        onClick={() => setOpenModal(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h1>Car</h1>
    </div>
  );
};

export default CarModal;

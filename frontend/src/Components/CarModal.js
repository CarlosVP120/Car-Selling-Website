import React, { useState } from "react";
import "./CarModal.css";

const CarModal = ({ setOpenModal, setOpenBuyModal, car, isSeller }) => {
  const [price, setPrice] = useState(car.precio);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlePriceSubmit = (event) => {
    event.preventDefault();
    const newPrice = window.prompt("Ingrese el nuevo precio:");

    fetch(`http://localhost:3001/cars/${car.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ precio: price }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el precio");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Precio actualizado:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
      <div className="car-container">
        <h1 className="car-title">
          {car.marca} {car.modelo}
        </h1>
        <div className="car-information">
          <img src={car.url_imagen} alt={car.modelo} className="car-image" />
          <div className="car-body">
            <h3>
              {car.marca} - {car.modelo} ({car.año})
            </h3>
            <p>
              <span>Precio:</span> ${car.precio}
            </p>
            <p>
              <span>Estado:</span> {car.estado}
            </p>
            <p>
              <span>Color:</span> {car.color}
            </p>
            <p>
              <span>Stock:</span> {car.stock}
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="car-button-container">
          <button
            type="button"
            className="car-button"
            onClick={() => {
              setOpenModal(false);
              setOpenBuyModal(true);
            }}
          >
            Comprar
          </button>
          <button
            type="button"
            className="car-button"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </button>
          {isSeller && (
            <button
              type="button"
              className="car-button"
              onClick={handlePriceSubmit}
            >
              Cambiar Precio
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarModal;

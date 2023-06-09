import React, { useState } from "react";
import "./CarModal.css";

const CarModal = ({ setOpenModal, setOpenBuyModal, car, isSeller }) => {
  const handlePriceSubmit = (event) => {
    event.preventDefault();
    const newPrice = window.prompt("Ingrese el nuevo precio:");

    fetch("https://car-selling-website.onrender.com/update/" + car.id_carro, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ precio: newPrice }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el precio");
        }
        return response.json();
      })
      .then((data) => {
        alert("Precio actualizado", data);
        car.precio = newPrice;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleStockSubmit = (event) => {
    event.preventDefault();
    const newStock = window.prompt("Ingrese el nuevo stock:");

    fetch(
      "https://car-selling-website.onrender.com/update/stock/" + car.id_carro,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stock: newStock }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el stock");
        }
        return response.json();
      })
      .then((data) => {
        alert("Stock actualizado", data);
        car.stock = newStock;
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
            <>
              <button
                type="button"
                className="car-button"
                onClick={handlePriceSubmit}
              >
                Cambiar Precio
              </button>
              <button
                type="button"
                className="car-button"
                onClick={handleStockSubmit}
              >
                Modificar Stock
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarModal;

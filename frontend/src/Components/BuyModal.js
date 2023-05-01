import React from "react";
import "./BuyModal.css";

const BuyModal = ({ setOpenBuyModal, car, setData }) => {
  const confirmBuy = () => {
    fetch("https://car-selling-website.onrender.com/buy/" + car.id_carro, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("¡Compra realizada con éxito!");
        // Update the stock using the setData function
        setData((prevData) => {
          const newData = prevData.result.map((item) => {
            if (item.id_carro === car.id_carro) {
              return { ...item, stock: item.stock - 1 };
            } else {
              return item;
            }
          });
          return { ...prevData, result: newData };
        });
        setOpenBuyModal(false);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="car-modal">
      {/* Close button */}
      <button
        className="car-modal-close-button"
        onClick={() => setOpenBuyModal(false)}
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
        <h1 className="car-buy-title">
          ¡Tu nuevo {car.marca} {car.modelo} está casi listo!
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
          <button type="button" className="car-buy-button" onClick={confirmBuy}>
            Confirmar compra
          </button>
          <button
            type="button"
            className="car-cancel-button"
            onClick={() => setOpenBuyModal(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;

import { useEffect } from "react";
import "./Homepage.css";
import Model from "./Model";

function Homepage({ setOpenModal, setCurrentCar }) {
  const loadM4 = () => {
    fetch("http://localhost:9000/inventario/6")
      .then((res) => res.json())
      .then((data) => setCurrentCar(data.result[0]))
      .catch((error) => alert(error));
  };

  return (
    <div className="container">
      <h3 className="homepage-subtitle">Conoce tu nuevo auto</h3>

      <h2 className="homepage-title">
        BMW
        <img src="img/m4.png" alt="BMW M4 2022" className="m4-logo" />
        2022
      </h2>
      <div className="homepage-buttons">
        <button
          type="button"
          className="homepage-button"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".card-section").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          Ver más
        </button>
        <button
          type="button"
          className="homepage-button buy-button"
          onClick={() => {
            loadM4();
            setOpenModal(true);
          }}
        >
          Comprar
        </button>
      </div>
      <div className="bmw-image">
        <Model />
      </div>
    </div>
  );
}

export default Homepage;

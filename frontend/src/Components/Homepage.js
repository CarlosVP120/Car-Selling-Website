import "./Homepage.css";
import Model from "./Model";

function Homepage() {
  return (
    <div className="container">
      <h3 className="homepage-subtitle">Conoce tu nuevo auto</h3>

      <h2 className="homepage-title">
        BMW
        <img src="img/m4.png" alt="BMW M4 2022" className="m4-logo" />
        2022
      </h2>
      <div className="homepage-buttons">
        <button type="button" className="homepage-button">
          Ver más
        </button>
        <button type="button" className="homepage-button buy-button">
          Comprar
        </button>
      </div>
      <div className="bmw-image">{/* <Model /> */}</div>
    </div>
  );
}

export default Homepage;

import bmw from "../images/bmw.png";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container">
      <h3 className="homepage-subtitle">Conoce tu nuevo auto</h3>
      <h1 className="homepage-title">BMW Modelo M4</h1>
      <div className="homepage-buttons">
        <button type="button" className="homepage-button">
          Ver más
        </button>
        <button type="button" className="homepage-button buy-button">
          Comprar
        </button>
      </div>
      <img src={bmw} alt="bmw_m4" className="bmw-image" />
    </div>
  );
}

export default Homepage;

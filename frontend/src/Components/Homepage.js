import "./Homepage.css";
import Navbar from "./Model";

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
      <div className="bmw-image">
        <Navbar />
      </div>
    </div>
  );
}

export default Homepage;

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="navbar">
      <img src="car-icon.png" alt="" className="logo-icon" />
      <div className="navbar-links">
        <a href="/">Inicio</a>
        <a href="/inventario">Inventario</a>
        <a href="/contacto">Contacto</a>
      </div>

      <div className="seller-dropdown">
        <div className="dropdown-button">
          {selectedOption && (
            <p className="selected-option">{selectedOption}</p>
          )}
          <button
            type="button"
            className="seller-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Ingresar
          </button>
        </div>
        {showDropdown && (
          <div className="dropdown-content">
            <button onClick={() => handleDropdownClick("Comprador")}>
              Comprador
            </button>
            <button onClick={() => handleDropdownClick("Vendedor")}>
              Vendedor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <img src="car-icon.png" alt="" className="logo-icon" />
      {/* Links */}
      <div className="navbar-links">
        <a href="/">Inicio</a>
        <a href="/inventario">Inventario</a>
        <a href="/contacto">Contacto</a>
      </div>
      {/* Seller Panel Button*/}
      <button type="button" className="seller-button">
        Ingresar
      </button>
    </div>
  );
};

export default Navbar;

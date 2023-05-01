import { useEffect } from "react";
import { useState } from "react";
import "./Homepage.css";
import Model from "./Model";

function Homepage({ setOpenModal, setCurrentCar, isSeller }) {
  const [openModalForm, setOpenModalForm] = useState(false);
  const [formData, setFormData] = useState({
    id_vendedor: "",
    marca: "",
    modelo: "",
    año: "",
    precio: "",
    estado: "",
    color: "",
    imagen: "",
    stock: "",
    url_imagen: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:9000/create")
      .then((response) => response.json())
      .then((data) => {
        setCurrentCar(data.result[0]);
        setFormData({
          id_vendedor: data.result[0].id_vendedor,
          marca: data.result[0].marca,
          modelo: data.result[0].modelo,
          año: data.result[0].año,
          precio: data.result[0].precio,
          estado: data.result[0].estado,
          color: data.result[0].color,
          imagen: data.result[0].imagen,
          stock: data.result[0].stock,
          url_imagen: data.result[0].url_imagen,
        });
        setOpenModalForm(true);
      })
      .catch((error) => alert(error));
  };

  const loadM4 = () => {
    fetch("https://car-selling-website.onrender.com/inventario/6")
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
      <div>
        {isSeller && (
          <button
            type="button"
            className="is-seller-button"
            onClick={() => {
              setOpenModalForm(true);
            }}
          >
            Agregar al inventario
          </button>
        )}
      </div>
      {openModalForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Formulario de llenado de carro</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID Vendedor:</label>
              <input
                type="text"
                id="id_vendedor"
                name="id_vendedor"
                value={formData.id_vendedor}
                onChange={handleInputChange}
              />
              <label htmlFor="marca">Marca:</label>
              <input
                type="text"
                id="marca"
                name="marca"
                value={formData.marca}
                onChange={handleInputChange}
              />
              <label htmlFor="modelo">Modelo:</label>
              <input
                type="text"
                id="modelo"
                name="modelo"
                value={formData.modelo}
                onChange={handleInputChange}
              />
              <label htmlFor="año">Año:</label>
              <input
                type="number"
                id="año"
                name="año"
                value={formData.año}
                onChange={handleInputChange}
              />
              <label htmlFor="precio">Precio:</label>
              <input
                type="number"
                id="precio"
                name="precio"
                value={formData.precio}
                onChange={handleInputChange}
              />
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
              />
              <label htmlFor="color">Color:</label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
              />
              <label htmlFor="imagen">Imagen:</label>
              <input
                type="text"
                id="imagen"
                name="imagen"
                value={formData.imagen}
                onChange={handleInputChange}
              />
              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="submit-button"
                onClick={handleSubmit}
              >
                Enviar
              </button>
              <button
                type="button"
                className="close-button"
                onClick={() => setOpenModalForm(false)}
              >
                Cerrar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;

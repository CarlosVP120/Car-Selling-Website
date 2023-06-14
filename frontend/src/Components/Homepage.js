import { useEffect } from "react";
import { useState } from "react";
import "./Homepage.css";
import Model from "./Model";
import data from "./Cars.json";

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
    url_imagen: "",
    stock: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (openModalForm) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://car-selling-website.onrender.com/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Carro agregado al inventario");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  const loadM4 = () => {
    setCurrentCar(data.cars[8]);

    // fetch("https://car-selling-website.onrender.com/inventario/6")
    //   .then((res) => res.json())
    //   .then((data) => setCurrentCar(data.result[0]))
    //   .catch((error) => alert(error));
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
              <div className="row">
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
              </div>
              <div className="row">
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
              </div>
              <div className="row">
                <label htmlFor="color">Color:</label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                />
                <label htmlFor="url_imagen">Imagen:</label>
                <input
                  type="text"
                  id="url_imagen"
                  name="url_imagen"
                  value={formData.url_imagen}
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
              </div>
              <div className="buttons">
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
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;

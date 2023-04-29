import { useEffect, useState } from "react";
import "./Cards.css";
import CarModal from "./CarModal";

function Cards() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9000/inventario")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error al obtener los datos: {error.message}</div>;
  }

  // If Modal is open, ignore the scroll
  if (openModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <>
      {" "}
      <div className={`card-section`}>
        <h1 className="card-title">Nuestros Autos</h1>
        <div className="card-container">
          {data.result &&
            data.result.map((item) => (
              <div key={item.id} className="card">
                <img src={item.url_imagen} alt={item.modelo} />
                <div className="card-body">
                  <h3>
                    {item.marca} - {item.modelo} ({item.año})
                  </h3>
                  <p>Precio: {item.precio}</p>
                  <p>Estado: {item.estado}</p>
                  <p>Color: {item.color}</p>
                  <p>Stock: {item.stock}</p>
                  <div className="card-button-container">
                    <button type="button" className="card-button">
                      Comprar
                    </button>
                    <button
                      type="button"
                      className="card-button"
                      onClick={() => setOpenModal(true)}
                    >
                      Abrir
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {openModal && (
        <CarModal setOpenModal={setOpenModal} openModal={openModal} />
      )}
    </>
  );
}

export default Cards;

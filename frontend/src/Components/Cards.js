import { useEffect, useState } from "react";
import "./Cards.css";
import CarModal from "./CarModal";
import BuyModal from "./BuyModal";
import dataJSON from "./Cars.json";

function Cards({
  openModal,
  setOpenModal,
  setCurrentCar,
  currentCar,
  setIsSeller,
  isSeller,
}) {
  const [data, setData] = useState(dataJSON);
  const [error, setError] = useState(null);
  const [openBuyModal, setOpenBuyModal] = useState(false);

  // useEffect(() => {
  //   fetch("https://car-selling-website.onrender.com/inventario")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => setError(error));
  // }, []);

  if (error) {
    return <div>Error al obtener los datos: {error.message}</div>;
  }

  // If Modal is open, ignore the scroll
  if (openModal || openBuyModal) {
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
          {data.cars &&
            data.cars.map((item) => (
              <div key={item.id} className="card">
                <img src={item.url_imagen} alt={item.modelo} />
                <div className="card-body">
                  <h3>
                    {item.marca} - {item.modelo} ({item.año})
                  </h3>
                  <p>Precio: ${item.precio}</p>
                  <p>Estado: {item.estado}</p>
                  <p>Color: {item.color}</p>
                  <p>Stock: {item.stock}</p>
                  <div className="card-button-container">
                    <button
                      type="button"
                      className="card-button"
                      onClick={() => {
                        setCurrentCar(item);
                        setOpenModal(false);
                        setOpenBuyModal(true);
                      }}
                    >
                      Comprar
                    </button>
                    <button
                      type="button"
                      className="card-button"
                      onClick={() => {
                        setCurrentCar(item);
                        setOpenModal(true);
                      }}
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
        <CarModal
          setOpenModal={setOpenModal}
          setOpenBuyModal={setOpenBuyModal}
          car={currentCar}
          setIsSeller={setIsSeller}
          isSeller={isSeller}
        />
      )}
      {openBuyModal && (
        <BuyModal
          setOpenBuyModal={setOpenBuyModal}
          car={currentCar}
          setData={setData}
        />
      )}
    </>
  );
}

export default Cards;

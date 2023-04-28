import { useEffect, useState } from "react";
import "./Cards.css";

function Cards() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/inventario")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error al obtener los datos: {error.message}</div>;
  }

  return (
    <>
      {" "}
      <div>
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
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Cards;

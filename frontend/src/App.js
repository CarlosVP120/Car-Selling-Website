import "./App.css";
import { useEffect, useState } from "react";

function App() {
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
    <div className="title">
      <h1>Carros</h1>
      <p>Lista de carros</p>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Color</th>
            <th>Imagen</th>
            <th>Stock</th>
            <th>URL Imagen</th>
          </tr>
        </thead>
        <tbody>
          {data.result &&
            data.result.map((item) => (
              <tr key={item.id}>
                <td>{item.marca}</td>
                <td>{item.modelo}</td>
                <td>{item.año}</td>
                <td>{item.precio}</td>
                <td>{item.estado}</td>
                <td>{item.color}</td>
                <td>{item.imagen}</td>
                <td>{item.stock}</td>
                <td>{item.url_imagen}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

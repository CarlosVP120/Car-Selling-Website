import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "admin",
  host: "car-website.c2k4scjnbyqp.us-east-2.rds.amazonaws.com",
  password: "carros123",
  database: "carros",
});

db.connect(function (error) {
  if (error) {
    console.log("Error Connecting to DB");
  } else {
    console.log("successfully Connected to DB");
  }
});

//Create a new car
app.post("/create", (req, res) => {
  const id_vendedor = req.body.id_vendedor;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const año = req.body.año;
  const precio = req.body.precio;
  const estado = req.body.estado;
  const color = req.body.color;
  const imagen = req.body.imagen;
  const stock = req.body.stock;
  const url_imagen = req.body.url_imagen;

  db.query(
    "INSERT INTO carros (id_vendedor, marca, modelo, año, precio, estado, color, imagen, stock, url_imagen) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      id_vendedor,
      marca,
      modelo,
      año,
      precio,
      estado,
      color,
      imagen,
      stock,
      url_imagen,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//Get
app.get("/inventario", (req, res) => {
  db.query("SELECT * FROM carros.inventario;", (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Error al obtener los datos" });
    } else {
      res.send({ result });
    }
  });
});

// get a specific car
app.get("/inventario/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM carros.inventario WHERE id_carro = ?;",
    id,
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener los datos" });
      } else {
        res.send({ result });
      }
    }
  );
});

// When a car is bought (stock - 1)
app.delete("/buy/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "UPDATE carros.inventario SET stock = stock - 1 WHERE id_carro = ?;",
    id,
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener los datos" });
      } else {
        res.send({ result });
      }
    }
  );
});

//Update
app.put("/update", (req, res) => {
  const id = req.body.id;
  const precio = req.body.precio;
  db.query(
    "UPDATE carros.inventario SET precio = ? WHERE id = ?;",
    [precio, id],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});

//Establish the Port
app.listen(9000, function check(error) {
  if (error) {
    console.log("Error....");
  } else {
    console.log("Server is running on port 9000");
  }
});

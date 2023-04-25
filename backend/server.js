import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "Kueski",
// });

const db = mysql.createConnection({
  host: "kueski.c2k4scjnbyqp.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  port: "3306",
  database: "kueski",
});

db.connect(function (error) {
  if (error) {
    console.log("Error Connecting to DB");
  } else {
    console.log("successfully Connected to DB");
  }
});

//Establish the Port
app.listen(9000, function check(error) {
  if (error) {
    console.log("Error....");
  } else {
    console.log("Server is running on port 9000");
  }
});

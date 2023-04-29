import "./App.css";
import Homepage from "./Components/Homepage";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [currentCar, setCurrentCar] = useState({});

  return (
    <>
      <Navbar />
      <Homepage
        openModal={openModal}
        setOpenModal={setOpenModal}
        setCurrentCar={setCurrentCar}
        currentCar={currentCar}
      />
      <Cards
        openModal={openModal}
        setOpenModal={setOpenModal}
        setCurrentCar={setCurrentCar}
        currentCar={currentCar}
      />
    </>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Panier from "./pages/Panier";
import "./App.css";

function App() {
  const [panier, setPanier] = useState([]);

  const addToCart = (parfum) => {
    setPanier((prevPanier) => [...prevPanier, parfum]);
  };
  const deleteFromCart = (parfum) => {
    setPanier((prevPanier) =>
      prevPanier.filter((item) => item.id !== parfum.id)
    );
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home panier={panier} addToCart={addToCart} />}
          />
          <Route
            path="/mon-panier"
            element={<Panier panier={panier} deleteFromCart={deleteFromCart} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

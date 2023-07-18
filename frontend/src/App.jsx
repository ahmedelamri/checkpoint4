import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Panier from "./pages/Panier";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mon-panier" element={<Panier />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

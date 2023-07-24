import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";
import Description from "@pages/Description";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Panier from "./pages/Panier";
import ListPanier from "./pages/ListPanier";
import "./App.css";

ReactModal.setAppElement("#root");

export default function App() {
  const [cartItems, setCartItems] = useState([]); // État pour les informations du panier

  const sauvegarderPanier = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/paniers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems), // cartItem stock mon panier
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Le panier a été sauvegardé dans la base de données.");
        } else {
          alert("Erreur lors de la sauvegarde du panier.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête", error);
      });
  };

  // Fonction pour ajouter un parfum au panier
  const addToCart = (parfum) => {
    // Vérifier si le parfum est déjà dans le panier
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === parfum.id
    );

    if (existingItemIndex !== -1) {
      // Si le parfum est déjà dans le panier, augmenter la quantité
      setCartItems((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].stock += 1;
        return updatedCart;
      });
    } else {
      // Si le parfum n'est pas dans le panier, l'ajouter avec une quantité de 1
      setCartItems((prevCart) => [...prevCart, { ...parfum, stock: 1 }]);
    }
  };

  // Fonction pour supprimer un parfum du panier
  const deleteFromCart = (parfum) => {
    const updatedCart = cartItems.filter((item) => item.id !== parfum.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Navbar sauvegarderPanier={sauvegarderPanier} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                panier={cartItems} // Utilisez cartItems au lieu de cart
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/mon-panier"
            element={
              <Panier panier={cartItems} deleteFromCart={deleteFromCart} />
            }
          />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/list-des-paniers" element={<ListPanier />} />
        </Routes>
      </main>
    </div>
  );
}

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ParfumCard from "./ParfumCard";

export default function ParfumList({ addToCart }) {
  const [parfums, setParfums] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/parfums`
    )
      .then((response) => response.json())
      .then((data) => {
        setParfums(data);
      })
      .catch((error) => {
        console.error("Error fetching  data:", error);
      });
  }, []);

  return (
    <section className="body-card">
      <div className="box-cards">
        {/* Afficher tous les parfums sans filtrer */}
        {parfums.map((parfum) => (
          <section className="section_bouton_add" key={parfum.id}>
            <ParfumCard parfum={parfum} />
            <button
              className="ajouter_panier"
              type="button"
              onClick={() => {
                addToCart(parfum);
              }}
            >
              Ajouter au panier
            </button>
          </section>
        ))}
      </div>
    </section>
  );
}

ParfumList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import ParfumCard from "./ParfumCard";

export default function ParfumList({ panier, addToCart }) {
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
        {parfums
          .filter((parfum) => panier.every((item) => item.id !== parfum.id))
          .map((parfum) => (
            <section key={parfum.id}>
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
  panier: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

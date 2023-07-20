import PropTypes from "prop-types";
import ParfumCard from "@components/ParfumCard";
import React from "react";

export default function Panier({ panier, deleteFromCart }) {
  return (
    <div>
      {panier.map((parfumm) => (
        <table className="tableau-panier" key={parfumm.id}>
          <caption>Mon panier</caption>
          <thead>
            <tr>
              <th>Information</th>
              <th>Prix unitaire</th>
              <th>Quantité</th>
              <th>Prix total</th>
            </tr>
          </thead>
          <tbody>
            {panier.map((parfum) => (
              <tr key={parfum.id}>
                <td>
                  <ParfumCard parfum={parfum} />
                </td>
                <td>{parfum.prix}</td>
                <td>{parfum.stock}</td>
                <td>{parfum.prix * parfum.stock}</td>
                <td>
                  <button
                    className="ajouter_panier"
                    type="button"
                    onClick={() => {
                      deleteFromCart(parfum);
                    }}
                  >
                    Retirer du panier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

Panier.propTypes = {
  panier: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      prix: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteFromCart: PropTypes.func.isRequired,
};

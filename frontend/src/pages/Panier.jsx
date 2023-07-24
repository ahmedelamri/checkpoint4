import PropTypes from "prop-types";
import ParfumCard from "@components/ParfumCard";
import React from "react";

export default function Panier({ panier, deleteFromCart }) {
  return (
    <div className="back">
      <table className="tableau-panier">
        <caption className="titletab">Mon panier</caption>
        <thead>
          <tr>
            <th>Information</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Prix total</th>
            <th> # </th>
          </tr>
        </thead>
        <tbody>
          {panier.map((parfum) => (
            <tr key={parfum.id}>
              <td className="td-tab">
                <ParfumCard parfum={parfum} />
              </td>
              <td className="td-tab">{parfum.prix}</td>
              <td className="td-tab">{parfum.stock}</td>
              <td className="td-tab">{parfum.prix * parfum.stock}</td>
              <td className="td-tab">
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

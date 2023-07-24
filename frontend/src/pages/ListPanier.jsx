import { useEffect, useState } from "react";

export default function ParfumList() {
  const [paniers, setPaniers] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/paniers`
    )
      .then((response) => response.json())
      .then((data) => {
        setPaniers(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  const handleDeletePanier = (panierId) => {
    // Envoyer une requête DELETE à votre backend pour supprimer le panier avec l'ID "panierId"

    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/paniers/${panierId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.ok) {
          // Supprimer le panier de la liste des paniers localement pour mettre à jour l'affichage
          setPaniers((prevPaniers) =>
            prevPaniers.filter((panier) => panier.id !== panierId)
          );
        } else {
          console.error("Erreur lors de la suppression du panier.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du panier :", error);
      });
  };

  return (
    <div className="back">
      <table className="tableau-panier">
        <caption className="titletab">Liste des paniers</caption>
        <thead>
          <tr>
            <th>Panier ID</th>
            <th>Parfum ID</th>
            <th>Quantité</th>
            <th>Prix total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paniers.map((panier) => (
            <tr key={panier.id}>
              <td>{panier.id}</td>
              <td>
                <ul>
                  {panier.parfums.map((parfum) => (
                    <li key={parfum.parfum_id}>
                      <p>{parfum.parfum_id}</p>
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {panier.parfums.map((parfum) => (
                    <li key={parfum.parfum_id}>
                      <p>{parfum.quantity}</p>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="tdprix">{panier.prix_total} EUROS</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDeletePanier(panier.id)}
                  className="btn-delete"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

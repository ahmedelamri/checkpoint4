import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Description() {
  const { id } = useParams();
  const [parfum, setParfum] = useState(null);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/parfums/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setParfum(data);
      })
      .catch((error) => {
        console.error("Error fetching parfum data:", error);
      });
  }, [id]);

  if (!parfum) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1>Description du parfum</h1>
      <img src={parfum.image} alt={parfum.nom} />
      <p>Nom : {parfum.nom}</p>
      <p>Marque : {parfum.marque}</p>
      <p>Prix : {parfum.prix} Euros</p>
      {/* Affichez d'autres détails du parfum ici */}
    </section>
  );
}

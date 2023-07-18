import React, { useEffect, useState } from "react";

export default function ParfumCard() {
  const [parfums, setParfums] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/parfums`
    )
      .then((response) => response.json())
      .then((data) => {
        setParfums(data).catch((error) => {
          console.error("Error fetching  data:", error);
        });
      });
  }, []);

  return (
    <section className="body-card">
      <div className="box-cards">
        {parfums.map((parfum) => (
          <figure className="cards" key={parfum.id}>
            <img src={parfum.imagee} alt={parfum.nom} />
            <figcaption>{parfum.nom}</figcaption>
            <p>{parfum.marque}</p>
            <p className="prix">Prix : {parfum.prix} Euros </p>
          </figure>
        ))}
      </div>
    </section>
  );
}

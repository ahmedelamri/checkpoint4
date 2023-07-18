import React from "react";

export default function ParfumCard() {
  const parfums = [
    {
      id: 1,
      nom: "Parfum 1",
      prix: 50,
      marque: "Marque 1",
      image: "chemin/vers/image1.jpg",
    },
    {
      id: 2,
      nom: "Parfum 2",
      prix: 70,
      marque: "Marque 2",
      image: "chemin/vers/image2.jpg",
    },
    {
      id: 3,
      nom: "Parfum 3",
      prix: 90,
      marque: "Marque 3",
      image: "chemin/vers/image3.jpg",
    },
  ];
  return (
    <section>
      <div>
        {parfums.map((parfum) => (
          <div key={parfum.id}>
            <img src={parfum.image} alt={parfum.nom} />
            <h2>{parfum.nom}</h2>
            <p>{parfum.marque}</p>
            <p>{parfum.info}</p>
            <p>Prix : {parfum.prix}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

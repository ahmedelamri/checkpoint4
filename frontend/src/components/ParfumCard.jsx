import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ParfumCard({ parfum }) {
  return (
    <figure className="cards">
      <div className="image-wrapper">
        <img src={parfum.image} alt={parfum.nom} />
        <div className="overlay">
          <Link to={`/description/${parfum.id}`}>
            <button type="button" className="overlay-button">
              Description
            </button>
          </Link>
        </div>
      </div>
      <figcaption>{parfum.nom}</figcaption>
      <p>{parfum.marque}</p>
      <p className="p2">Eau de parfum</p>
      <p className="prix">Prix : {parfum.prix} Euros </p>
    </figure>
  );
}

ParfumCard.propTypes = {
  parfum: PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    marque: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
  }).isRequired,
};

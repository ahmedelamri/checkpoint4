import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logos2 from "../photos/logos2.jpg";
import panier from "../photos/panier.png";
import sauvegarde from "../photos/sauvegarde.png";
import utilisateur from "../photos/utilisateur.png";

export default function Navbar({ sauvegarderPanier }) {
  return (
    <nav className="Nav1">
      <Link to="/" className="no-link-style">
        <img src={logos2} alt="Logo" />
      </Link>
      <Link to="/" className="no-link-style">
        <h1>L'Oasis Parfumée</h1>
      </Link>
      <div className="nav_liens">
        <Link to="/mon-panier" className="no-link-style">
          <img src={panier} alt="panier" />
        </Link>
        <button type="button" onClick={sauvegarderPanier}>
          <img src={sauvegarde} alt="sauvegarde" />
        </button>

        <Link to="/list-des-paniers" className="no-link-style">
          <img src={utilisateur} alt="utilisateur" />
        </Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  sauvegarderPanier: PropTypes.func.isRequired,
};

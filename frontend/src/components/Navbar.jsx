import { Link } from "react-router-dom";
import logos2 from "../photos/logos2.jpg";
import panier from "../photos/panier.png";
import sauvegarde from "../photos/sauvegarde.png";

export default function Navbar() {
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
        <img src={sauvegarde} alt="sauvegarde" />
      </div>
    </nav>
  );
}

import logos2 from "../photos/logos2.jpg";
import panier from "../photos/panier.png";
import sauvegarde from "../photos/sauvegarde.png";

export default function Navbar() {
  return (
    <nav className="Nav1">
      <img src={logos2} alt="Logo" />
      <h1>L'Oasis Parfumée</h1>

      <div className="nav_liens">
        <img src={panier} alt="panier" />
        <img src={sauvegarde} alt="sauvegarde" />
      </div>
    </nav>
  );
}

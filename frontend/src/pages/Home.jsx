import ParfumList from "@components/ParfumList";
import PropTypes from "prop-types";

export default function Home({ panier, addToCart }) {
  return (
    <section>
      <h1 className="titlehome">
        " Laissez-vous transporter vers les contrées orientales avec nos parfums
        envoûtants, véritables joyaux de la parfumerie..."
      </h1>
      <ParfumList panier={panier} addToCart={addToCart} />
    </section>
  );
}

Home.propTypes = {
  panier: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

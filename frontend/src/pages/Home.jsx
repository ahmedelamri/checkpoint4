import ParfumList from "@components/ParfumList";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "react-modal";

export default function Home({ panier, addToCart }) {
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (parfum) => {
    addToCart(parfum);
    setNotification(`${parfum.nom} a été ajouté au panier !`);
  };

  // Configuration pour le style du modal
  const customModalStyles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f2d78a",
      color: "#623d29",
      maxWidth: "400px",
      width: "90%",
      maxHeight: "200px",
      overflow: "auto",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  // Fonction pour fermer le modal
  const handleCloseModal = () => {
    setNotification(null);
  };

  return (
    <section>
      <h1 className="titlehome">
        " Laissez-vous transporter vers les contrées orientales avec nos parfums
        envoûtants, véritables joyaux de la parfumerie..."
      </h1>
      <ParfumList panier={panier} addToCart={handleAddToCart} />

      <Modal
        isOpen={!!notification}
        onRequestClose={handleCloseModal}
        style={customModalStyles}
        contentLabel="Notification Modal"
      >
        <div className="notification">{notification}</div>
        <button type="button" className="prix" onClick={handleCloseModal}>
          Fermer
        </button>
      </Modal>
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

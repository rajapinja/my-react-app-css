import React, { useState } from 'react';
import ServiceModal from './ServiceModal';
import '../css/images.css';

const ImageCard = ({ id, title, imageUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        className="card_image"
        style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
        onClick={openModal}
      >
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </button>
      <ServiceModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};

export default ImageCard;

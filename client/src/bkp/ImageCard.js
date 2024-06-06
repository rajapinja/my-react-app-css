import React from 'react';
import '../css/images.css';
// Card component
const ImageCard = ({ id, title, imageUrl }) => (
  <div className="card" key={id}>
    <img src={imageUrl} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

export default ImageCard;

import React from 'react';
import image1 from '../images/Home_Repair.jpg';
import image2 from '../images/BrickWorker.jpg';
import image3 from '../images/Construction_Worker.jpg';
import image4 from '../images/Constructiontoolssupplies.jpg';
import image5 from '../images/ConstructionWorker.jpg';
import image6 from '../images/Cartoon_Electrician.jpg';
import image7 from '../images/delivery_service.jpg';
// import image8 from '../images/EssentialElectricianTools.jpg';
import image9 from '../images/WallPainter.jpg';
import image10 from '../images/painting_service.jpg';
import image11 from '../images/Plumbing_Service.jpg';
import image12 from '../images/plumbing_logo.jpg';
import image13 from '../images/SandServices.jpg';
import image14 from '../images/WaterkloofPlumbers.jpg';
import image15 from '../images/Red_Brick_services.jpg';
import '../css/images.css';
// Sample image URLs
const imageUrls = [ 
    '../images/Home_Repair.jpg',
    '../images/BrickWorker.jpg',
    '../images/Construction_Worker.jpg',
    '../images/Constructiontoolssupplies.jpg',
    '../images/ConstructionWorker.jpg',
    '../images/Cartoon_Electrician.jpg',
    '../images/delivery_service.jpg',
    // '../images/EssentialElectricianTools.jpg',
    '../images/WallPainter.jpg',
    '../images/painting_service.jpg',
    '../images/Plumbing_Service.jpg',
    '../images/Construction_Worker.jpg'    
  ];


// Sample data for cards
const imageData = [
  { id: 1, title: 'Home Repair(s)', imageUrl: image1 },
  { id: 2, title: 'Brick Worker(s)', imageUrl: image2 },
  { id: 3, title: 'Construction Worker(s)', imageUrl: image3 },
  { id: 4, title: 'Construction Tools', imageUrl: image4 },
  { id: 5, title: 'Construction Worker(s)', imageUrl: image5 },
  { id: 6, title: 'Electrician', imageUrl: image6 },
  { id: 7, title: 'Delivery Services', imageUrl: image7 },
  // { id: 8, title: 'Essential Electrician Tools', imageUrl: image8},
  { id: 9, title: 'Wall Painter', imageUrl: image9 },
  { id: 10, title: 'Painting Services', imageUrl: image10},
  { id: 11, title: 'Plumbing Services', imageUrl: image11 },
  { id: 12, title: 'Plumbing', imageUrl: image12 },
  { id: 11, title: 'Sand Services', imageUrl: image13 },
  { id: 12, title: 'Water Kloof Plumbing', imageUrl: image14 },
  { id: 12, title: 'Red Brick Service', imageUrl: image15 }
];

// Card component
const ImageCard = ({ id, title, imageUrl }) => (
  <div className="card_image" key={id}>
    <img src={imageUrl} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

// Component to display image cards
const ImageCardList = ({ images }) => (
  <div className="card-deck" >
    {images.map((image) => (
      <ImageCard key={image.id} {...image} />
    ))}
  </div>
);

// App component
const ImageDisplayScreen = () => {
  return (
    <div className="container_images">
      <h3 style={{textAlign:'center'}}>Image Gallery</h3>
      <ImageCardList images={imageData} />
    </div>
  );
};

export default ImageDisplayScreen;

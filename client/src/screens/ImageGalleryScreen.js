import React from 'react';
import ImageCard from '../components/ImageCard';
import '../css/images.css';

// Function to import images dynamically
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Import all images from the images folder
const images = importAll(require.context('../images', false, /\.(jpg|jpeg|png)$/));

// Sample data for cards
const imageData = [
  { id: 1, title: 'Home Repairs', imageUrl: images['Home_Repair.jpg'].default },
  { id: 2, title: 'Brick Worker', imageUrl: images['BrickWorker.jpg'].default },
  { id: 3, title: 'Construction Worker', imageUrl: images['Construction_Worker.jpg'].default },
  // Add more image data here...
];

// Component to display image cards
const ImageCardList = ({ images }) => (
  <div className="card-deck">
    {images.map((image) => (
      <ImageCard key={image.id} {...image} />
    ))}
  </div>
);

// App component
const ImageGalleryScreen = () => {
  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <ImageCardList images={imageData} />
    </div>
  );
};

export default ImageGalleryScreen;

import React, { useState, useEffect } from 'react';
import image1 from '../images/aurora.jpg';
import image2 from '../images/blueWater.jpg';
import image3 from '../images/darkBlue1.jpg';
import image4 from '../images/bottomwhite.jpg';
import image5 from '../images/iceland.jpg';
import image6 from '../images/gradientDisplay.jpg';

const images = [image1,image2,image3,image4,image5,image6];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Slideshow</h2>
      <img src={images[index]} alt={`Slide ${index + 1}`} style={{ width: '100%', height:'70vh', borderRadius:'8px' }} />
    </div>
  );
};

export default Slideshow;

import React, { useState } from 'react';
import '../css/DeckOfCards.css'; // Import your CSS file

const DeckOfCards = ({ menuHeight = 0 }) => { // Optional menuHeight prop

  const [activeCard, setActiveCard] = useState(null);

  const handleClick = () => {
    setActiveCard(activeCard === null ? 0 : (activeCard + 1) % 5);
  };

  // Define an array of gradient color pairs for each card
  const cardColors = [
    ['#f00', '#ff0'], // Card 1 - Red to Orange
    ['#0f0', '#0ff'], // Card 2 - Blue to Cyan
    ['#00f', '#fff'], // Card 5 - Blue to White 
    ['#ff0', '#0f0'], // Card 3 - Orange to Blue
    ['#f0f', '#00f'], // Card 4 - Pink to Blue    
  ];

  return (
    <div className="deck-of-cards-container">
      <div className="card-stack" style={centerAndAboveFooterStyles(menuHeight)}>
        {[1, 2, 3, 4, 5].map((cardNumber, index) => (
          <div
            key={index}
            className={`card ${index === activeCard ? 'active' : ''}`}
            onClick={handleClick}
            style={{
              background: `linear-gradient(to right, ${cardColors[index][0]}, ${cardColors[index][1]})`,
            }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {`Card ${cardNumber}`}
              </div>
              <div className="flip-card-back">
                Back Content
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define styles for centering and positioning above footer
const centerAndAboveFooterStyles = (menuHeight = 0) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: `calc(100vh - ${menuHeight}px - footerHeight)`, // Account for menu and footer
  // Adjust footerHeight based on your actual footer height
  // Example: footerHeight = 100px
});

export default DeckOfCards;

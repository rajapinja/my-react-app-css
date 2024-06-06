import React, { useState } from 'react';
import '../css/LayeredCards.css';

const LayeredCards = () => {
  const [currentCard, setCurrentCard] = useState(1);

  const handleCardClick = () => {
    if (currentCard < 3) {
      setCurrentCard(currentCard + 1);
    }
  };

  return (
    <div className="layered-cards-container">
      <div className={`card card-${currentCard}`} onClick={handleCardClick}>
        <h3>Card {currentCard}</h3>
        <p>This is the content of card {currentCard}.</p>
      </div>
      {currentCard > 1 && (
        <div className={`card card-${currentCard - 1}`}>
          <h3>Card {currentCard - 1}</h3>
          <p>This is the content of card {currentCard - 1}.</p>
        </div>
      )}
      {currentCard > 2 && (
        <div className={`card card-${currentCard - 2}`}>
          <h3>Card {currentCard - 2}</h3>
          <p>This is the content of card {currentCard - 2}.</p>
        </div>
      )}
    </div>
  );
};

export default LayeredCards;

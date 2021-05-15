import React, { useState } from 'react';
const Card = ({ card, idx, setCurrCards, currCards, cardDisabled }) => {
  const [isFlipped, setIsFlipped] = useState(card.length === 3);
  const handleClick = (e) => {
    if (!cardDisabled && card.length === 2) {
      const newCards = currCards.slice();
      newCards[idx] = card + "!";
      setCurrCards(newCards);
      setIsFlipped(flipped => !flipped);
    }
  }
  return (
    <div className={isFlipped ? "card is-flipped" : 'card'} onClick={handleClick} id={`card-${card}`}>
      <div className="card__face card__back">
        <h1>{card}</h1>
      </div>
      <div className="card__face card__front">
        {`${isFlipped}`}
      </div>
    </div>
  )
}

export default Card;
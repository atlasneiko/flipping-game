import React from 'react';
const Card = ({ card, idx, setCurrCards, currCards, cardDisabled }) => {
  const handleClick = (e) => {
    if (!cardDisabled) {
      const newCards = currCards.slice();
      newCards[idx] = card + "!";
      console.log(newCards);
      setCurrCards(newCards);
    }
  }
  return (

    <div className="Card" onClick={handleClick} style={{ border: "1px solid black" }}>
      <h1>{card}</h1>
      <p>{idx}</p>
    </div>
  )
}

export default Card;
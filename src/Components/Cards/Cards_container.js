import React, { useState, useEffect } from 'react';
import Card from './Card'

const CardContainer = ({ cardNum }) => {
  const cardPool = [
    '1a', '1b', '2a', '2b',
    '3a', '3b', '4a', '4b',
    '5a', '5b', '6a', '6b',
    '7a', '7b', '8a', '8b',
    '9a', '9b'
  ];
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
  }
  const newCards = cardNum === 0 ? [] : shuffle(cardPool.slice(0, cardNum * 2));
  const [currCards, setCurrCards] = useState(newCards)

  // * update currCards based on total card number
  const newCardsLen = newCards.length;
  useEffect(() => {
    setCurrCards(newCards)
    // eslint-disable-next-line
  }, [newCardsLen])

  //* handle flippedCardCount
  let cardDisabled = false;
  const flippedCardCount = currCards.filter(ele => ele.length === 3).length;

  if (flippedCardCount === 2) {
    const flippedCards = currCards.filter(card => card.length === 3);
    if (flippedCards[0][0] !== flippedCards[1][0]) {
      cardDisabled = true;
      setTimeout(() => {
        console.log("clickable again!");
        cardDisabled = false;
        const resetCards = currCards.map(card => {
          return card.length === 3 ? card.slice(0, 2) : card
        })
        setCurrCards(resetCards);
      }, 3000)

    }


  }

  return (
    <div className="card-container">
      <h1>{cardNum}</h1>
      { currCards.map((card, idx) => {
        return <Card
          card={card}
          idx={idx}
          setCurrCards={setCurrCards}
          currCards={currCards}
          key={`card-key-${card}`}
          cardDisabled={cardDisabled}
        />
      }
      )}
    </div>
  )
}

export default CardContainer;
import React, { useEffect, useState } from 'react';
import Card from './Card';
const CardContainer = ({ cardNum }) => {
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const allCards = [
    {
      cardidx: "10",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "11",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "20",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "21",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "30",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "31",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "40",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "41",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "50",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "51",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "60",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "61",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "70",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "71",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "80",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "81",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "90",
      isFlipped: false,
      paired: false
    }, {
      cardidx: "91",
      isFlipped: false,
      paired: false
    },
  ]
  const shuffledCards = shuffle(allCards.slice(0, cardNum * 2));
  const [currCards, setCurrCards] = useState(shuffledCards);
  // listen to card number
  useEffect(() => {
    setCurrCards(shuffledCards);
    // eslint-disable-next-line
  }, [cardNum])
  const [isDisabled, setIsDisabled] = useState(false);
  // listen to all currCards
  useEffect(() => {
    const flippedCards = currCards.filter(card => card.isFlipped && !card.paired)
    console.log(flippedCards)
    if (flippedCards.length === 2) {
      const isPair = flippedCards[0].cardidx[0] === flippedCards[1].cardidx[0];
      if (isPair) {
        const cardsWithNewPair = currCards.map(card => {
          if (flippedCards.includes(card)) {
            return { ...card, paired: true };
          } else {
            return card;
          }
        })
        setCurrCards(cardsWithNewPair);
      } else {
        setIsDisabled(true);
        setTimeout(() => {
          const unflippedCards = currCards.map(card => {
            if (flippedCards.includes(card)) {
              return { ...card, isFlipped: false };
            } else {
              return card;
            }
          })
          setCurrCards(unflippedCards);
          setIsDisabled(false)
        }, 3000)
      }
    }
  }, [currCards])


  return (
    <div className="card-container">
      {
        currCards.map(card => {
          return (
            <Card
              card={card}
              key={`card-key-${card.cardidx}`}
              currCards={currCards}
              setCurrCards={setCurrCards}
              isDisabled={isDisabled}
            />
          )
        })
      }
    </div>
  )
};
export default CardContainer;
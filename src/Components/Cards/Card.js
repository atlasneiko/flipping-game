import { useState, useEffect } from 'react';
const Card = ({ card, currCards, setCurrCards, isDisabled }) => {
  const { isFlipped, cardidx } = card
  const handleClick = () => {
    if (!isDisabled) {
      const flippedCard = { ...card, isFlipped: true };
      const newCards = currCards.map(card => {
        if (card.cardidx === cardidx) {
          return flippedCard;
        } else {
          return card;
        }
      });
      setCurrCards(newCards);
    }
  }
  const cardClassList = isFlipped ? "card is-flipped" : "card";
  const [cardIsFlipped, setCardIsFlipped] = useState(cardClassList)
  useEffect(() => {
    setCardIsFlipped(cardClassList)
    // eslint-disable-next-line
  }, [isFlipped])
  return (
    <div className={cardIsFlipped} onClick={handleClick}>
      <div className="card__face card__front">
        {/* {`${isFlipped}`} */}
      </div>
      <div className={`card__face card__back color-${cardidx[0]}`}>
        {/* {cardidx} */}
      </div>
    </div>
  )
}
export default Card;
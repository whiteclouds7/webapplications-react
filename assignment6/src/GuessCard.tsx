import React, { useState } from "react";
import { Card } from "./businessLogic/Card";
import { CardDeck, Guess } from "./businessLogic/CardDeck";
import styled from "styled-components";

const cards: Card[] = CardDeck.initializeCardDeck();

const StyledSpan = styled.span`
  display: block;
`;

const GuessCard = (): JSX.Element => {
  const [cardDeck, setCardDeck] = useState<CardDeck>(new CardDeck(cards));

  function handleGuess(guess: Guess): void {
    cardDeck.guessCard(guess);
    setCardDeck(new CardDeck(cardDeck.getAllCards(), cardDeck.getScore()));
  }

  return (
    <>
      <h1>Card Guessing Game</h1>
      <div>
        <StyledSpan>{cardDeck.getCurCard().color}</StyledSpan>
        <StyledSpan>{cardDeck.getCurCard().cardType}</StyledSpan>
      </div>
      <h1>{cardDeck.getDeckSize()}</h1>
      <button
        onClick={() => handleGuess("lower")}
        disabled={cardDeck.getDeckSize() <= 0}
      >
        lower
      </button>
      <span>{cardDeck.getScore()}</span>
      <button
        onClick={() => handleGuess("higher")}
        disabled={cardDeck.getDeckSize() <= 0}
      >
        higher
      </button>
    </>
  );
};

export default GuessCard;

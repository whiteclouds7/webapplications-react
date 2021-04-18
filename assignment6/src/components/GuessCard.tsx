import React, { useState } from "react";
import { Card } from "../businessLogic/Card";
import { CardDeck, Guess } from "../businessLogic/CardDeck";
import styled from "styled-components";
import CardComponent from "./CardComponent";

const cards: Card[] = CardDeck.initializeCardDeck();

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  > button {
    background-color: cadetblue;
    color: #fff;
    border-radius: 0.4rem;
    display: inline-block;
    padding: 0.5rem 2rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1rem;
    &:disabled {
      background-color: lightgrey;
    }
  }
  > span {
    padding: 1rem 3rem;
    font-size: 2rem;
  }
  > * {
    margin: 0 2rem;
  }
`;

const GuessCard = (): JSX.Element => {
  const [cardDeck, setCardDeck] = useState<CardDeck>(new CardDeck(cards));

  function handleGuess(guess: Guess): void {
    cardDeck.guessCard(guess);
    setCardDeck(
      new CardDeck(
        cardDeck.getAllCards(),
        cardDeck.getPlayedCards(),
        cardDeck.getScore()
      )
    );
  }

  return (
    <>
      <h1>Card Guessing Game</h1>
      <CardComponent card={cardDeck.getCurCard()} />
      <h1>{cardDeck.getDeckSize()}</h1>
      <ButtonContainer>
        <button
          onClick={() => handleGuess("lower")}
          disabled={cardDeck.getDeckSize() <= 1}
        >
          lower
        </button>
        <span>Score: {cardDeck.getScore()}</span>
        <button
          onClick={() => handleGuess("higher")}
          disabled={cardDeck.getDeckSize() <= 1}
        >
          higher
        </button>
      </ButtonContainer>
    </>
  );
};

export default GuessCard;

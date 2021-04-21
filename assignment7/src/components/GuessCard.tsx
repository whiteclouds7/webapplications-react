import React from "react";
import {Color} from "../businessLogic/Card";
import styled from "styled-components";
import CardComponent, {colors} from "./CardComponent";
import {observer} from "mobx-react";
import {Game, Guess} from "../businessLogic/Game";

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

const History = styled.div<{ color: Color }>`
  align-self: flex-start;
  margin-left: 10rem;
  > h3 {
    > span {
      color: ${({ color }) =>
        color === "Heart" ? "red" : color === "Diamond" ? "red" : "black"};
    }
  }
`;

interface Props {
    game: Game,
}

const GuessCard = observer(({game}: Props): JSX.Element => {

  function handleGuess(guess: Guess): void {
    game.guessCard(guess);
  }

  return (
    <>
      <h1>Card Guessing Game</h1>
      <CardComponent card={game.curCard} />
      <ButtonContainer>
        <button
          onClick={() => handleGuess("lower")}
          disabled={game.deckSize <= 1}
        >
          lower
        </button>
        <span>Score: {game.score}</span>
        <button
          onClick={() => handleGuess("higher")}
          disabled={game.deckSize <= 1}
        >
          higher
        </button>
      </ButtonContainer>
      <History
        color={
          game.playedDeckSize > 0
            ? game.previousCard.color
            : "Heart"
        }
      >
        <h2>Cards left: {game.deckSize}</h2>
        {game.playedDeckSize > 0 && (
          <h3>
            Recently played Card:{" "}
            <span>
              {colors[game.previousCard.color]}{" "}
              {game.previousCard.cardType}
            </span>
          </h3>
        )}
      </History>
    </>
  );
});

export default GuessCard;

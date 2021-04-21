import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import GuessCard from "./components/GuessCard";
import {CardDeck} from "./businessLogic/CardDeck";
import {autorun} from "mobx";
import {Game} from "./businessLogic/Game";

const game = new Game(new CardDeck(CardDeck.initializeCardDeck()));

autorun(() => {
    console.log(`new Card drawn ${game.curCard.color} ${game.curCard.cardType}`);
})

const GlobalStyles = createGlobalStyle`
body {
  font-family: Courier New, sans-serif;
  font-size: 1.2em;
  font-weight: 300;
  letter-spacing: .01em;
  line-height: 1.6;
}

h1 {
  color: cadetblue;
  font-size: 4rem;
  font-weight: bold;
}
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <GuessCard game={game}/>
      </StyledContainer>
    </>
  );
};

export default App;

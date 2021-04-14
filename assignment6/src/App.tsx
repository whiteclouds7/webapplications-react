import React from "react";
import styled from "styled-components";
import GuessCard from "./GuessCard";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = (): JSX.Element => {
  return (
    <>
      <Title>Hello World!</Title>
      <GuessCard />
    </>
  );
};

export default App;

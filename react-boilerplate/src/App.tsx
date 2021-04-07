import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = (): JSX.Element => {
  return (
    <>
      <Title>Hello World!</Title>
    </>
  );
};

export default App;

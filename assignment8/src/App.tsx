import React from "react";
import { createGlobalStyle } from "styled-components";
import GifList from "./components/GifList";

const GlobalStyles = createGlobalStyle`
body {
  font-family: Courier New, sans-serif;
  font-size: 1.2em;
  font-weight: 300;
  letter-spacing: .01em;
  line-height: 1.6;
  background-color: #FFC0CB;
}
`;


const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
          <GifList/>
    </>
  );
};

export default App;

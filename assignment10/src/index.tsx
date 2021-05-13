import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const data: number[] = Array.from(Array(52).keys());

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

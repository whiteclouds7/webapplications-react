import React from "react";
import { Card, Color } from "../businessLogic/Card";
import styled from "styled-components";

export const colors = {
  Heart: "♥",
  Diamond: "♦",
  Club: "♣",
  Spade: "♠",
};

const StyledDiv = styled.div<{ color: Color }>`
  color: ${({ color }) => (color === ("Heart" || "Diamond") ? "red" : "black")};
  display: flex;
  flex-direction: row;
  font-size: 5rem;
  font-weight: bold;
  > span {
    margin: 0 10px;
  }
`;

interface Props {
  card: Card;
}

const CardComponent = (props: Props): JSX.Element => {
  return (
    <StyledDiv color={props.card.color}>
      <span>{colors[props.card.color]}</span>
      <span>{props.card.cardType}</span>
    </StyledDiv>
  );
};

export default CardComponent;

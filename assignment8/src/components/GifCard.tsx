import React from "react";
import styled from "styled-components";

interface Props {
  url: string;
  title: string;
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  max-width: 180px;
  border-radius: 0.4rem;
  background-color: #e6e6fa;
  word-break: break-word;

  > h2 {
    font-size: 1rem;
  }
`;

const GifCard = (props: Props): JSX.Element => {
  return (
    <StyledContainer>
      <h2>{props.title}</h2>
      <img src={props.url} alt={"giph"} />
    </StyledContainer>
  );
};

export default GifCard;

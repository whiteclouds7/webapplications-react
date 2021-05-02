import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  background-color: #e6e6fa;
  color: #fff;
  border: 0.1rem solid #e6e6fa;
  border-radius: 0.4rem;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0 3rem;
  height: 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 1rem 3rem;
`;

const StyledInput = styled.input`
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  padding: 0.6rem 1rem 0.7rem;
  margin: 0 3rem;
  width: 100px;
  font-family: Courier New,serif;
  flex-grow: 2;
`;

interface Props {
  onClick: (searchKey: string) => void;
}
const SearchBar = (props: Props): JSX.Element => {
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setSearch("");
    props.onClick(search);
  };

  return (
    <StyledContainer>
      <StyledInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="off"
        type="text"
        onKeyUp={(e) => (e.code === "Enter" ? handleClick() : undefined)}
      />
      <StyledButton onClick={handleClick}>Search</StyledButton>
    </StyledContainer>
  );
};

export default SearchBar;

import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export interface NavigationItem {
  label: string;
  to: string;
}

interface NavigationTabs {
  tabs: NavigationItem[];
  handleLocalChance: (locale: string) => void;
}

const StyledNavigation = styled.nav`
  background-color: #E6E6FA;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 0.4rem;
  font-size: 28px;
  
  >select {
    margin-left: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  padding-left: 2rem;
  text-decoration: none;
  &:hover {
    color: #FFC0CB;
  }
`;

const NavigationBar = (props: NavigationTabs): JSX.Element => {
  return (
    <StyledNavigation>
      {props.tabs.map((item: NavigationItem) => (
        <StyledLink
          key={item.label}
          to={item.to}
        >
          {item.label}
        </StyledLink>
      ))}
        <select name="locale" id="locale" onChange={(event) => props.handleLocalChance(event.target.value)}>
          <option value={"de"}>de</option>
          <option value={"en"}>en</option>
          <option value={"fr"}>fr</option>
        </select>
    </StyledNavigation>
  );
};

export default NavigationBar;

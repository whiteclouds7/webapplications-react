import React from "react";
import styled from "styled-components";

export interface NavigationItem {
  label: string;
  onClick?: () => void;
}

interface NavigationTabs {
  tabs: NavigationItem[];
}

const StyledNavigation = styled.nav`
  background-color: #9b4dca;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 0.4rem;
`;

const StyledLink = styled.a`
  color: #fff;
  padding-left: 2rem;
`;

const NavigationBar = (props: NavigationTabs): JSX.Element => {
  return (
    <StyledNavigation>
      {props.tabs.map((item: NavigationItem) => (
        <StyledLink
          style={{ color: "white", paddingLeft: 30 }}
          key={item.label}
          onClick={item.onClick && item.onClick}
        >
          {item.label}
        </StyledLink>
      ))}
    </StyledNavigation>
  );
};

export default NavigationBar;

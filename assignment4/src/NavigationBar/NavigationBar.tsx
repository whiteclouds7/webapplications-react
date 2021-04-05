import React from "react";

export interface NavigationItem {
  label: string;
  onClick?: () => void;
}

interface NavigationTabs {
  tabs: NavigationItem[];
}

const NavigationBar = (props: NavigationTabs): JSX.Element => {
  return (
    <nav>
      {props.tabs.map((item: NavigationItem) => (
        <a key={item.label} onClick={item.onClick && item.onClick}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavigationBar;

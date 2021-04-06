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
    <nav
      style={{
        backgroundColor: "#9b4dca",
        fontWeight: "bold",
        padding: 10,
        marginBottom: 50,
      }}
    >
      {props.tabs.map((item: NavigationItem) => (
        <a
          style={{ color: "white", paddingLeft: 30 }}
          key={item.label}
          onClick={item.onClick && item.onClick}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavigationBar;

import React, { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import MessageForm from "./Form/MessageForm";
import MessageItem from "./MessageItem/MessageItem";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export interface Message {
  subject: string;
  body: string;
  read: boolean;
}

const GlobalStyles = createGlobalStyle`
body {
  font-family: Courier New;
  font-size: 1.2em;
  font-weight: 300;
  letter-spacing: .01em;
  line-height: 1.6;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color}
}
`;

const StyledSpan = styled.span`
  color: red;
`;

export const themes = {
  dark: {
    backgroundColor: "#332940",
    color: "#fff",
  },
  light: {
    backgroundColor: "#fff",
    color: "black",
  },
};

const App = (): JSX.Element => {
  const [formIsShown, setFormIsShown] = useState(true);
  const [messageList, setMessageList] = useState<Array<Message>>([]);
  const [theme, setTheme] = useState(themes.light);

  const navigationItems = [
    {
      label: `Messages [${
        messageList.filter((m: Message) => !m.read).length > 5
          ? "5+"
          : messageList.filter((m: Message) => !m.read).length
      }]`,
      onClick: () => setFormIsShown(false),
    },
    {
      label: "New Messages",
      onClick: () => setFormIsShown(true),
    },
  ];

  const addMessage = (m: Message): void => {
    updateMessage(messageList, m);
    setFormIsShown(false);
  };

  const readMessage = (m: Message): void => {
    updateMessage(
      messageList.filter((msg: Message) => msg !== m),
      {
        ...m,
        read: true,
      }
    );
  };

  const updateMessage = (messages: Message[], m: Message): void => {
    setMessageList(
      [...messages, m].sort((m1: Message, m2: Message) =>
        m1.read === m2.read ? 0 : m2.read ? -1 : 1
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationBar tabs={navigationItems} />
      <label htmlFor="theme">dark mode</label>
      <input
        type="checkbox"
        name="theme"
        onChange={() =>
          theme === themes.light
            ? setTheme(themes.dark)
            : setTheme(themes.light)
        }
      />
      {formIsShown ? (
        <MessageForm addMessage={addMessage} />
      ) : (
        <div>
          {messageList.filter((m) => !m.read).length > 0 && (
            <StyledSpan>
              You have {messageList.filter((m) => !m.read).length} unread
              messages!
            </StyledSpan>
          )}
          {messageList.map((m: Message) => (
            <MessageItem
              key={JSON.stringify(m)}
              message={m}
              readMessage={readMessage}
            />
          ))}
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;

import React, { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import MessageForm from "./Form/MessageForm";
import MessageItem from "./MessageItem/MessageItem";

export interface Message {
  subject: string;
  body: string;
  read: boolean;
}

const App = (): JSX.Element => {
  const [formIsShown, setFormIsShown] = useState(true);
  const [messageList, setMessageList] = useState<Array<Message>>([]);

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
    <>
      <NavigationBar tabs={navigationItems} />
      {formIsShown ? (
        <MessageForm addMessage={addMessage} />
      ) : (
        <div>
          {messageList.filter((m) => !m.read).length > 0 && (
            <span style={{ color: "red" }}>
              You have {messageList.filter((m) => !m.read).length} unread
              messages!
            </span>
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
    </>
  );
};

export default App;

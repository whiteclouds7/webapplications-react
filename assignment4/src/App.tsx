import React, { useEffect, useState } from "react";
import NavigationBar, { NavigationItem } from "./NavigationBar/NavigationBar";
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
  const [navigationItems, setNavigationItems] = useState<Array<NavigationItem>>(
    [
      {
        label: "Messages",
        onClick: () => setFormIsShown(false),
      },
      {
        label: "New Messages",
        onClick: () => setFormIsShown(true),
      },
    ]
  );

  const addMessage = (m: Message): void => {
    updateMessage(messageList, m);
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
    setMessageList([...messages, m]);
  };

  useEffect(() => {
    setNavigationItems([
      {
        ...navigationItems[0],
        label: `Messages [${
          messageList.filter((m: Message) => !m.read).length > 5
            ? "5+"
            : messageList.filter((m: Message) => !m.read).length
        }]`,
      },
      navigationItems[1],
    ]);
  }, [messageList]);

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

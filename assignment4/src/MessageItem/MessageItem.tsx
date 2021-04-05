import React from "react";
import { Message } from "../App";

interface MessageItemProps {
  message: Message;
  readMessage: (m: Message) => void;
  key: string;
}

const MessageItem = (props: MessageItemProps): JSX.Element => {
  return (
    <div
      style={{ backgroundColor: !props.message.read ? "yellow" : "white" }}
      onClick={() => props.readMessage(props.message)}
    >
      <h1>{props.message.subject}</h1>
      {props.message.body && <span>{props.message.body}</span>}
    </div>
  );
};

export default MessageItem;

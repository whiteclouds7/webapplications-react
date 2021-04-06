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
      style={{
        backgroundColor: !props.message.read ? "#9b4dca" : "lavender",
        color: !props.message.read ? "white" : "grey",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        border: "2px solid #9b4dca",
      }}
      onClick={() => props.readMessage(props.message)}
    >
      <h1 style={{ fontSize: 20, fontWeight: "bold" }}>
        {props.message.subject}
      </h1>
      {props.message.body && <span>{props.message.body}</span>}
    </div>
  );
};

export default MessageItem;

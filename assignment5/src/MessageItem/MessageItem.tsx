import React from "react";
import { Message } from "../App";
import styled from "styled-components";

interface MessageItemProps {
  message: Message;
  readMessage: (m: Message) => void;
  key: string;
}

const StyledDiv = styled.div`
  padding: 0.25rem;
  margin: 0.5rem 3rem;
  border-radius: 0.4rem;
  border: 2px solid #9b4dca;
  background-color: ${(props: { isRead: boolean }) =>
    !props.isRead ? "#9b4dca" : "lavender"};
  color: ${(props: { isRead: boolean }) => (!props.isRead ? "white" : "grey")};
`;

const MessageItem = (props: MessageItemProps): JSX.Element => {
  return (
    <StyledDiv
      isRead={props.message.read}
      onClick={() => props.readMessage(props.message)}
    >
      <h1 style={{ fontSize: 20, fontWeight: "bold" }}>
        {props.message.subject}
      </h1>
      {props.message.body && <span>{props.message.body}</span>}
    </StyledDiv>
  );
};

export default MessageItem;

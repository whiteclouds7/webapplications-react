import React, { useState } from "react";
import { Message } from "../App";
import styled from "styled-components";

interface MessageList {
  addMessage: (m: Message) => void;
}

const reset = (setter: (s: string) => void, resetValue = "") => {
  setter(resetValue);
};

const StyledButton = styled.button`
  background-color: #9b4dca;
  color: #fff;
  border: 0.1rem solid #9b4dca;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0 3rem;
  height: 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 1rem 3rem;
`;

const StyledInput = styled.input`
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  padding: 0.6rem 1rem 0.7rem;
  margin: 0 3rem;
  width: 90%;
  font-family: Courier New;
`;

const StyledTextarea = styled.textarea`
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 3.8rem;
  padding: 0.6rem 1rem 0.7rem;
  margin: 0 3rem;
  width: 90%;
`;

const MessageForm = (props: MessageList): JSX.Element => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    props.addMessage({
      subject: subject,
      body: body,
      read: false,
    });

    reset(setSubject);
    reset(setBody);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="subject">Subject</label>
      <StyledInput
        type="text"
        name="subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        autoComplete="off"
        required
      />

      <label htmlFor="body">Body</label>
      <StyledTextarea
        name="body"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />

      <StyledButton>send</StyledButton>
    </form>
  );
};

export default MessageForm;

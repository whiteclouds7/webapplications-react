import React, { useState } from "react";
import { Message } from "../App";

interface MessageList {
  // messageList: Message[];
  // setMessageList: (m: Message[]) => void;
  addMessage: (m: Message) => void;
}

const reset = (setter: (s: string) => void, resetValue = "") => {
  setter(resetValue);
};

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
      <input
        type="text"
        name="subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        required
      />

      <label htmlFor="body">Body</label>
      <textarea
        name="body"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />

      <button className="button">send</button>
    </form>
  );
};

export default MessageForm;

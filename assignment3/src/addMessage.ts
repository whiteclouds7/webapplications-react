import Message from "./message";

const addMessage = (message: Message): void => {
  const allMessages: HTMLElement = document.getElementById("messageList");
  const li: HTMLElement = document.createElement("li");
  const subject: HTMLElement = document.createElement("h1");
  const body: HTMLElement = document.createElement("span");
  body.innerHTML = message.body;
  subject.innerHTML = message.subject;

  li.appendChild(subject);
  li.appendChild(body);
  li.classList.add("message");
  li.classList.add("unread");
  allMessages.appendChild(li);
};

export default addMessage;

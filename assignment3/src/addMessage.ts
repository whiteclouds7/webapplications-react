import Message from "./message";

const addMessage = (message: Message): void => {
  const allMessages: HTMLElement = document.getElementById("messageList");
  const li: HTMLElement = document.createElement("li");
  li.innerHTML = `${message.subject} </br> ${message.body}`;
  li.classList.add("message");
  li.classList.add("unread");
  allMessages.appendChild(li);
};

export default addMessage;

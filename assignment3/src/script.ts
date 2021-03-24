import Message from "./message";
import addMessage from "./addMessage";
import switchPage from "./switchPage";

const form: HTMLFormElement = document.getElementById(
  "form"
) as HTMLFormElement;
// navbar span
const readMessages: HTMLElement = document.getElementById("readMessages");
const newMessage: HTMLElement = document.getElementById("newMessages");
// div containing ul + span
const messageBlock: HTMLElement = document.getElementById("messageBlock");
// ul containing messages
const messageList: HTMLElement = document.getElementById("messageList");
// span showing message if messages are unread
const unreadMessages: HTMLElement = document.getElementById("unreadMessages");

let unreadMessageCounter = 0;

form.addEventListener("submit", (event) => submitForm(event));

readMessages.addEventListener(
  "click",
  () => switchPage(messageBlock, form),
  false
);
newMessage.addEventListener(
  "click",
  () => {
    switchPage(form, messageBlock);
    form.reset();
  },
  false
);

messageList.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("unread")) {
    target.classList.remove("unread");
    unreadMessageCounter -= 1;
    updateReadMessages();
    updateMessageNav();
  }
});

const submitForm = (event: Event): void => {
  const formData: FormData = new FormData(form);

  const message: Message = new Message(
    formData.get("subject").toString(),
    formData.get("body").toString()
  );
  event.preventDefault();
  addMessage(message);
  unreadMessageCounter += 1;
  updateReadMessages();
  updateMessageNav();
  switchPage(messageBlock, form);

  form.reset();
};

const updateReadMessages = () => {
  if (unreadMessageCounter > 0) {
    unreadMessages.innerHTML = `you have ${unreadMessageCounter} messages`;
    unreadMessages.hidden = false;
  } else {
    unreadMessages.hidden = true;
  }
};

const updateMessageNav = () => {
  readMessages.innerHTML = `Messages [${
    unreadMessageCounter > 5 ? "5+" : unreadMessageCounter
  }]`;
};

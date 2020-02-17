/*
* Start to initialize the application
*/ 

// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

// add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();

  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener('submit', e => {
  e.preventDefault();

  // updete name via chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);

  // reset the form 
  newNameForm.reset();

  // show then hide update message
  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => updateMssg.innerText = ' ', 3000);
});

// update the chat room
rooms.addEventListener('click', e => {
  console.log(e);
});

// chack local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get chat and render
chatroom.getChats(data => {
  chatUI.render(data)
});
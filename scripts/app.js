/*
* Start to initialize the application
*/ 

// DOM queries
const chatlist = document.querySelector('.chat-list');

// class instances
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', 'shaun');

// get chat and render
chatroom.getChats(data => {
  chatUI.render(data)
});
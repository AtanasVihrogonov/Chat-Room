/*
* Start to initialize the application
*/ 

// class instances
const chatroom = new Chatroom('general', 'shaun');

// get chat and render
chatroom.getChats(data => {
  console.log(data);
});
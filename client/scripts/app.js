//message info that will be sent to server
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};


var escapedMessage = _.escape(message); 
var app = {
  init: function(){
    $(document).ready(function(){
      console.log( "ready!" );
      $('#send').on('click', 'btn-submit',function(){
        console.log('submit clicked')
        app.send();
      });
    });

    app.send();
    app.fetch();

  }, //function to initialize app
  
  server: 'https://api.parse.com/1/classes/chatterbox',
  
  send: function(escapedMessage){ //function for message send that initializes post request
     //ask help desk
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(escapedMessage),
    contentType: 'application/json',
    
    success: function (escapedMessage) {
      if(escapedMessage){

        app.addMessage(escapedMessage);
        app.addRoom(escapedMessage)
      };
      console.log('chatterbox: Message sent');
    },
    error: function (escapedMessage) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
    });
  },

  fetch: function(){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.server ,
    type: 'GET',
    // data: JSON.stringify(message),
    // console.log('message:', message);
    contentType: 'application/json',
    success: function (data) {
      // console.log(data)
      // data = JSON.parse(data)
      // app.addMessage(data);
      // console.log('chatterbox: Data received');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive data');
    }
    }); 
  },

  clearMessages: function() { 
      $('#chats').empty()
    // $('.btn-clear').click(function(){
    // });
  },

  addMessage: function(message){
    //iterate through the message object
   $('<div> <p><a href="#" class="username">' + message.username + '</a></p> <p>' + message.text + '</p> </div>' ).appendTo('#chats');
    $(document).on('click', '.username', function(event){
      event.preventDefault();
      app.addFriend();
    });
  },

  addRoom: function(message){
    $('<p>' + message.room + '</>').appendTo('#roomSelect')
  },

  addFriend: function(username){
    console.log('call2')
    // message.username
  }

};



app.init();



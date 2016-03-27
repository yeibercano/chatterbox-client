//message info that will be sent to server
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};



      //   event.preventDefault();
      //   console.log('submit clicked')
      //   var $value = $('.btn-submit').val();
      //   console.log('value submitted by user,', $value);
      //   app.send($value);
      // });

// var escapedMessage = _.escape(message); 

var app = {
  server: 'https://api.parse.com/1/classes/chatterbox',
  username: "anonymous",
  lastMessageId: 0,


  init: function(){
    app.username = window.location.search.substr(10);//what does this syntax mean?
    app.onscreenMessages = {};
    app.$text = $('#message');
    app.fetch();
    setInterval(app.fetch.bind(app), 2000);
    $('#send').on('.submit', app.submitHandler);
  }, //function to initialize app
  

  submitHandler: function(event){
    event.preventDefault();
      var message = {
        username: app.username,
        text: app.$text.val()
      }
    app.$text.val('');
    app.send(message);
  },

  
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







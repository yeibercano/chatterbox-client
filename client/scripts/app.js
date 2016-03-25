//message info that will be sent to server
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};


var app = {
  init: function(){
    $(document).ready(function(){
      console.log( "ready!" );
    });
  }, //function to initialize app
  
  send: function(message){ //function for message send that initializes post request
    // var escapeMessage = _.escape(message);  //ask help desk
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
    });
  },

  fetch: function(){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    // url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
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
   $('<div> <p>' + this.username + '</p> <p>' + this.text + '</p> </div>' ).appendTo('#chats');
  }

};
app.init();



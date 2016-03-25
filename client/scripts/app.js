//message info that will be sent to server
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};


var app = {
  init: function(){}, //function to initialize app
  send: function(message){ //function for message send that initializes post request
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
  
  }

};




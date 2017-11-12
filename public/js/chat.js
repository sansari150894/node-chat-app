var socket = io();

var param;

socket.on('connect', function () {
  console.log('Connected to server');
  param=jQuery.deparam(window.location.search);
  console.log(param);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li=jQuery('<li></li>');
  li.text(`${message.from} : ${message.text}`);
  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit',function(e){
    console.log("this is called when submit");
    e.preventDefault();
    socket.emit('createMessage',{
        from:param.name,
        text:jQuery('[name=message]').val(),
        
    });
    jQuery('[name=message]').val('');
});


////////////////////////////////////////////////////////////

jQuery('#message-form-welcome').on('submit',function(e){
  e.preventDefault();
  var name =jQuery('[name=message-welcome]').val();
  console.log(name);
  
});
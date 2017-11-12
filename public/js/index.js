var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
  socket.emit('newMessage',{
      from : 'salahuddin',
      text:'this is from salahuddin'
  });
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
        from:"user",
        text:jQuery('[name=message]').val(),
        
    });
    jQuery('[name=message]').val('');
});
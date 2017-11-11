const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const http=require('http');
const publicPath= path.join(__dirname,'/../public');
const port=process.env.PORT||3000;


var app=express();
var server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));


io.on('connection',(socket)=>{
    console.log("new user is connected");
    socket.on('disconnect',()=>{
        console.log("user is disconneted");
    })

    socket.emit('newMessage',{
        to:"client",
        text:"client lo bhai"
    })

    socket.on('createMessage',(message)=>{
        console.log("Message:"+message.toString);
    })
})

server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
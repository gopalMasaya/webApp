var express = require('express');
//var session = require('express-session')
//var bp = require('body-parser')
var app = express();
//app.set('trust proxy', 1)

var server = app.listen(process.env.PORT || 4000,res);


var path = require('path');
//var router = express.Router();
var socket = require('socket.io');
var io = socket(server);

var user="";
var user_pass="";
var user_data;
var send = false;



function res(){
  var host = server.address().address;
   var port = server.address().port;
  console.log("starting.....")
  console.log(__dirname)
}

io.sockets.on('connection',onConnection);

function onConnection(socket){
  console.log("new connection"+socket.id);
// io.sockets.emit('msg', "AIzaSyCgFGZnEAYV9ASg98wKyhHa9lN2eTEn0MU");
 send = false;


   if(user_data != undefined){
   io.sockets.emit('msg',user_data);
}else console.log("no data")

  socket.on('msg',message);

  function message(data){
   console.log(data);
   user_pass = data.pass;
   user = data.user;

   socket.broadcast.emit('msg',data);
   user_data = data;
   io.sockets.emit('msg',data);
send = false;
  }

if(user_data != undefined){

  io.sockets.emit('msg',user_data);}



socket.on('disconnect', function(){
  console.log("refresh")


});

}
if(user_data != undefined){
var mess = user_data;}


app.use(express.static('public'));
//app.use(bp.urlencoded({extended:true}))
//app.use(bp.json())



app.get('/', function(req, res) {
  //res.send("done")
  res.sendFile(path.join(__dirname +'/public/index.html'));

});

app.get('/admin', function(req, res) {
  //res.send("done")
  var sendto = path.join(__dirname +'/public/admin.html');
  res.sendFile(sendto);
  //res.sendFile(options)

});

let express = require('express');
let port = process.env.PORT || 8000;
let bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require("path");
let knex = require('./db/knex.js')


const users = require('./routes/usersRoutes');
const channel = require('./routes/channelRoutes');

let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));

server.listen(8080, function(){
  console.log("LISTENING ON PORT", 8080);
})

let conversation = [];
let object = {}
io.on('connection', socket => {
  // console.log('new Client Connnected');
  socket.on('send message', (message) => {
    console.log('message received', message)
    conversation = message.messageList.length ? [...conversation, message.message] : [message.message];
    io.sockets.emit('new message', conversation);
  })
  socket.on('send videoObj', (obj) => {
    console.log(' send videoObj received', obj)
    io.sockets.emit('new videoObj', obj);
  })
  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  })
})//end of io.on()
app.get("/channels",(req,res)=>{
  console.log(req);
  knex("channel")
  .then((result)=>{
    res.json(result);
  })
})


app.post("/channel/create",(req,res)=>{
  console.log(req);
  knex("channel")
  .insert({
    host_id : 1,
    friend_id:1 ,
    is_active: true,
    video_url: req.body.url
  })
  .then((result)=>{
    console.log("success")
    res.send(200);
  })
})
app.use(logger("dev"));
app.use(cors());


// app.use(express.static(path.join(__dirname,"public")));
//
// require('./config/session.js')(app);
//
// app.set('view engine','ejs');
//
// app.use('/users', users);
// app.use('/channel', channel);
//
// var routes = require('./config/routes.js');
// routes(app);


//
app.listen(port, function(){
  console.log("LISTENING ON PORT", port);
})

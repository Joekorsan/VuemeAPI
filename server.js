let express = require('express');
let port = process.env.PORT || 8000;
let bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require("path");


const users = require('./routes/usersRoutes');
const channel = require('./routes/channelRoutes');

let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);


server.listen(8080, function(){
  console.log("LISTENING ON PORT", 8080);
})

let conversation = [];

io.on('connection', socket => {
  // console.log('new Client Connnected');

  socket.on('send message', (message) => {
    console.log('message received', message)
    conversation = message.messageList.length ? [...conversation, message.message] : [message.message];
    io.sockets.emit('new message', conversation);
  })

  socket.on('disconnect', ()=>{
    console.log('User disconnected');

  })
})//end of io.on()

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
//
app.use(express.static(path.join(__dirname,"public")));

// require('./config/session.js')(app);
//
// app.set('view engine','ejs');
//
app.use('/users', users);
app.use('/channel', channel);

// var routes = require('./config/routes.js');
// routes(app);


//
app.listen(port, function(){
  console.log("LISTENING ON PORT", port);
})

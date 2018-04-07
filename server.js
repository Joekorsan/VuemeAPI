let express = require('express');
let port = process.env.PORT || 8000;
let bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require("path");


const users = require('./routes/usersRoutes');
const channel = require('./routes/channelRoutes');

let app = express();


app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,"public")));

require('./config/session.js')(app);

app.set('view engine','ejs');

app.use('/users', users);
app.use('/channel', channel);

// var routes = require('./config/routes.js');
// routes(app);



app.listen(port, function(){
  console.log("LISTENING ON PORT", port);
})

let express = require('express');
let port = process.env.PORT || 8000;
let bodyParser = require('body-parser');
let app = express();
const path = require("path");

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,"public")));

require('./config/session.js')(app);

app.set('view engine','ejs');

var routes = require('./config/routes.js');
routes(app);

app.listen(port, function(){
  console.log("LISTENING ON PORT", port);
})

let index = require('../controllers/index.js');
let login = require('../controllers/login.js');
let signup = require('../controllers/signup.js');
let listings = require('../controllers/listings.js');
let user = require('../controllers/user.js');
module.exports = function(app){

  app.get('/',index.home);
  app.get('/login',index.login);
  app.get('/signup',index.signup);
}

const validate = (req, res, next) => {
  req.session.user ? next() : res.redirect('/');
}

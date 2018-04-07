let knex = require('../db/knex.js');
module.exports = {
  home: function(req,res){
    if(req.session.user){
      res.render('index',{user_name :req.session.user.substring(0,req.session.user.indexOf('@')) ,loggedIn: true, login: false, signup: false});
    }else{
      res.render('index',{loggedIn: false, login: false, signup: false});
    }
  },
  login: function(req,res){
    if(req.session.user){
      res.redirect('/auth/listings');
    }else{
      console.log(req.session);
      res.render('index',{loggedIn: false,login : true});
    }
  },
  signup: function(req,res){
    res.render('index',{loggedIn: false,login : false, signup : true});
  },

}

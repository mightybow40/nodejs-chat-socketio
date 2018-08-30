exports.get = function(req, res, next){
var username = req.params.name;

  if(username){
      var obj = require('../models/index')();

      var User = require('../models/user')(obj.s, obj.S);
      User.findOne({ where: {username: username} }).then(function(data){
          if(data == null){
              next(new Error("Not Found"));
          }
          else{
              res.render('account', {user_name: data.dataValues.username, user_id: data.dataValues.id, dateCreate: data.dataValues.createdAt});
          }
      });
  }
else if(req.session.user_name){
      var obj = require('../models/index')();

      var User = require('../models/user')(obj.s, obj.S);
      User.findOne({ where: {username: req.session.user_name} }).then(function(data){
          res.render('account', {user_name: data.dataValues.username, user_id: data.dataValues.id, dateCreate: data.dataValues.createdAt});
      });
  }
else{
        next(new Error("Not Found"));
    }








};
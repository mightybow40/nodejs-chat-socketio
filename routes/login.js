exports.get = function(req, res,next){

    res.render('login');
};
exports.post = function(req, res){

    var obj = require('../models/index')();
    var log = req.body.login;
    var pass = req.body.password;



    var User = require('../models/user')(obj.s, obj.S);
    User.findOne({ where: {username: log, password: pass} }).then(function(data){
        if(req.session.user_id){
            res.status(406).send('123');
        }
        else{
            if(data == null){

                res.status(403).send('User not found');
            }
            else{

                req.session.user_id = data.dataValues.id;
                req.session.user_name = data.dataValues.username;

                res.send(data.dataValues.username);
            }
        }
    });




};
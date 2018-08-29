exports.get = function(req, res){
res.render('singIn');
};

exports.post = function(req, res){

    var obj = require('../models/index')();
    var log = req.body.login;
    var pass = req.body.password;
    var second = req.body.second;

    function newUser(login, pass, sequelize){
        sequelize.sync().then(function(){
            User.create({
                username: login,
                password: pass
            });
        });
    }

    var User = require('../models/user')(obj.s, obj.S);
    User.findOne({ where: {username: log} }).then(function(data){

            if(data == null){

                newUser(log, pass, obj.s);
                res.send('success');
            }
            else{
                res.status(403).send("Name is using");
            }

    });
};
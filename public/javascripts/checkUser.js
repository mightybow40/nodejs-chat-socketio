module.exports = function(req, res, next){
if(req.session.user_id){
    var obj = require('../../models/index')();
    var User = require('../../models/user')(obj.s, obj.S);
    User.findById(req.session.user_id).then(function(user){
        if(user){
            req.currentUser = user;

            next();
        }
        else{

            res.redirect('/');
        }
    });
}
else{

    res.redirect('/');
}
};
exports.get = function(req, res){
    res.render('chat');
};


exports.post = function(req, res){

        if(req.session.user_name){
            res.send(req.session.user_name);
        }

};
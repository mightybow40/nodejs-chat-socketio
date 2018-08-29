exports.get = function(req, res){

    res.render('index');

};

exports.post = function(req, res){
    req.session.destroy();
res.send('s');
};
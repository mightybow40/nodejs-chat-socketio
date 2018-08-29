const cookie = require('cookie');
const config = require('config');
const cookieParser = require('cookie-parser');
const sessionStore = require('../libs/sessionStore');
const getSession = require('../libs/getSession');


module.exports = function(server){
    const io = require('socket.io')(server);




    io.use(function(socket, next){

        socket.handshake.cookie = cookie.parse(socket.handshake.headers.cookie || '');
        const sidCookie = socket.handshake.cookie[config.get('session:key')];
        const sid = cookieParser.signedCookie(sidCookie, config.get('session:secret'));
        if(!socket.handshake.user_name){
            getSession(sid).then(function(data){
                socket.handshake.user_name = JSON.parse(data.dataValues.data).user_name;
                next();
            });
        }
        else{
            next();
        }

    });






    io.on('connection', function(socket){

        socket.broadcast.emit('con', socket.handshake.user_name +' joined on this chat');
        socket.on('disconnect', function(){
            socket.broadcast.emit('dis', socket.handshake.user_name +' leaved from this chat');
        });




           socket.on('message', function(msg, cb){
               socket.broadcast.emit('send', {name: socket.handshake.user_name, msg: msg});
               cb('123');
           });


    });
};
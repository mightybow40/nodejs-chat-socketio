var main = require('./main');
var loginPage = require('./login');


module.exports = function(app){
  app.get('/', main.get);
app.post('/logout', main.post);
app.get('/login', loginPage.get);
app.post('/auth', loginPage.post);
app.get('/chat', require('../public/javascripts/checkUser') ,require('./chat').get);
app.get('/user/:name?', require('./user').get);
app.get('/singin', require('./registration').get);
app.post('/singin', require('./registration').post);
app.post('/send', require('./chat').post);








};
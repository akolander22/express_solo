var express = require('express');
var app = express();
var path = require('path');

var oneRouter = require('./one');
var port = 3000;

app.get('/', function(request, response){
  console.log('attempt');
  response.send('This is a message!');
})
app.listen(port, function(){
  console.log('Server\'s Up!');
});

app.use('/one', oneRouter);

app.use(express.static('js'));

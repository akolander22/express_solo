var express = require('express');

var router = express.Router();

router.get('/', function(request, response){
  // response.sendFile(path.join(__dirname, 'js', 'html'));
  response.send('Hello?');
})


module.exports = router;

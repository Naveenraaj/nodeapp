var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Vanakkam Ulagamey 1 !');
});
app.listen(3000, function () {
  console.log('Guarding on port 3000!');
});
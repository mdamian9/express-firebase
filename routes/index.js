var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res) => {
  res.send('Home');
});

router.get("/test", (req, res) => {
  res.send("Test");
});

module.exports = router;

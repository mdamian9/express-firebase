const firebase = require('firebase-admin');
const db = firebase.database();
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res) => {
  res.send('Home');
});

router.get('/', (req, res) => {
  res.send('Test');
});

router.post('/messages', (req, res) => {
  console.log("post");
  const newMessage = req.body;
  console.log(JSON.stringify(newMessage));
  res.send(newMessage);

  db.ref().push(newMessage);

});

module.exports = router;

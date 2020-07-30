var express = require('express');
const user = require('../models/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(user); 
  res.render('index', { title: 'Live Code Collab' });
});

router.get('/index', function (req, res, next) {
  console.log(user.name);
  res.render('index', { title: 'Live Code Collab', layout: 'layout' });
});

router.get('/about', function (req, res, next) {
  console.log(user);
  res.render('about', { title: 'Live Code Collab' });
});




// { title: 'my other page', layout: 'other' }
module.exports = router;

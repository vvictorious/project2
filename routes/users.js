var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/user', function(req, res, next) {
  res.send('submit info page');
});
module.exports = router;

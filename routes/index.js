var express = require('express');
var router = express.Router();
var path = require('path');
router.post('/home/json', function(req, res, next){
  res.json({ 'item': 'items'});
});
router.get('/home/json', function(req, res, next){
  res.json({ 'item': 'items'});
});
module.exports = router;

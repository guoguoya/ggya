var express = require('express');

var dataRouter = express.Router();
dataRouter.get('/', function(req, res, next){
    res.json({ 
        name : 'yujiabin',
        age: '23'
    });
});

dataRouter.post('/', function(req, res, next){
    res.json({ 'item': 'items'});
});

module.exports = dataRouter ;

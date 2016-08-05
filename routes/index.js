var express = require('express');
var router = express.Router();
var path = require('path');
 
/* GET home page. */
/*router.get('/home', function(req, res, next){
    var options = {
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    var dirPath = path.join(__dirname + '/index.html'); 

    res.sendFile( dirPath, options, function(err){
        if(err){
            return console.error(err);
            res.status(err.status).end();
        }
        else{
            console.log('send success');
        }
    });
});*/
router.post('/home/json', function(req, res, next){
  res.json({ 'item': 'items'});
});
router.get('/home/json', function(req, res, next){
  res.json({ 'item': 'items'});
});
module.exports = router;

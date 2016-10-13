var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var projectRoot = process.env.root ;
var markdown = require('markdown').markdown;
router.post('/', function(req, res, next){
  res.json({ 'item': 'items'});
});
router.get('/', function(req, res, next){
  res.json({ 'item': 'items'});
});
router.get('/:name/:id', function(req, res, next){
    console.log('get');
    var name = req.params.name;
    var id = req.params.id+'.md';
    console.log(name);
    console.log(id);
    readFile( path.join(projectRoot,"/article/",name,id),function(data){
        var htmlContent = markdown.toHTML(data.toString());
        res.send(htmlContent);
    });
});
router.post('/home/json', function(req, res){
    console.log('post');
    res.json({ 'name': 'sdfsdf'});
});


function findDir(path,callback) {
    fs.readdir( path, function(err, files){
        if(err) {
            return console.error(err);
        }
        files.forEach(function(file){
            console.log(file);
        });
        callback(files);
    });
}
function readFile(filePath,callback) {
    fs.readFile(filePath, function(err, data){
        if(err) {
            return console.error(err);
        }
        callback(data);
    });
}
//var c = path.join(projectRoot, '/article/mode');
readFile(path.join(projectRoot, "/article/node.md"), function(data){
    console.log(data.toString());
});

module.exports =  router ;
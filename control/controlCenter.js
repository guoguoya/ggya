var fs = require('fs');
var data  = require('./data');
var path = require('path');


function ControlCenter () {
    this.array = [] ;
} 

ControlCenter.prototype = {
    getAll: function(){
        getdir(__dirname);
    },
    getdir: function(filePath){
        var that = this; 
        fs.readdir(filePath, function(err,files){
            if(err){
                console.error(err);
            }
            else {
                files.forEach( fucntion(file){
                    var newPath = path.join(filePath, file);
                    if( fs.stat(newPath).isDirectory() ){
                        that.getdir(newPath);
                    }
                    else{
                        that.push(file);
                    }
                });
            }
        });
    }
}
var controlCenter = new ControlCenter();

module.exports = controlCenter;
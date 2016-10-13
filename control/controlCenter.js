var fs = require('fs');
var path = require('path');


function ControlCenter () {
    this.array = [] ;
} 
var standard = /^[a-zA-z]+(\.js)$/;
ControlCenter.prototype = {
    getAll: function(){
       this.getdir(__dirname);
    },
    getdir: function(filePath){
        var that = this; 
        fs.readdir(filePath, function(err,files){
            if(err){
                console.error(err);
            }
            else {
                files.forEach( function(file){
		    var newPath = path.join(filePath, file);
                    fs.stat(newPath, function(err, stats){
		    	if(err){
			  return console.error(err);
			}
			if(stats.isDirectory()){
			  that.getdir(newPath);
			}
			else{
			  if(standard.test(file)){
				that.array.push(file);
			  }
			}
		    });
                });
            }
        });
    }
}
var controlCenter = new ControlCenter();
controlCenter.getAll();
controlCenter.array.forEach( function(val){
 console.log(val);
});
console.log('controlcenter getall');
module.exports = {} ;

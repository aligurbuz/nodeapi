#!/usr/bin/env '+this.argv['dir']+'

"use strict";

var path = require('path');
var appDir = path.dirname(require.main.filename);

var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true
});

cli.on("create", function(){

  var fs = require('fs');
  var file_content = fs.readFileSync('./package.json');
 var content = JSON.parse(file_content);

 for (var i in this.argv)
 {
   if(i!=="_" && i!=="notNull")
   {

   }
 }


 console.log(content)

});

#!/usr/bin/env '+this.argv['dir']+'

"use strict";

var path = require('path');
var appDir = path.dirname(require.main.filename);

var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true
});

cli.on("change", function(){

  var fs = require('fs');
  fs = require('fs');

  for (var i in this.argv)
  {
    if(i!=="_" && i!=="notNull" && i!=="dir")
    {
      var port=this.argv['port'];

      fs.readFile('./config/config.js', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }


        var changedata=data.replace(new RegExp("port            : 3000,", "g"),"port            : "+port+",");

        fs.writeFile('./config/config.js',changedata, function (err) {
          if (err) return console.log(err);
          console.log('port has been changed');

        });

      });
    }


  }




});

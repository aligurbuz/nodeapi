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
  fs = require('fs');


    if(this.argv['i']!=="_" && this.argv['i']!=="notNull")
    {

      var fs = require('fs');

      var file='./model/'+this.argv['model']+'.js';
      var namespace=this.argv['table'];

      fs.readFile('./commands/execution/model/create.js', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        var filedata=data.replace(new RegExp('admin', 'g'),namespace);


        fs.writeFile(file,filedata, function (err) {
          if (err) return console.log(err);
          console.log('model create process has been done');
        });

      });

      return;
    }



});

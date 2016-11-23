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
  for (var i in this.argv)
  {

    if(i!=="_" && i!=="notNull")
    {
      var fs = require('fs');

      var sourcefile='./jobs/'+this['argv'][i]+'.js';

      fs.readFile('./commands/execution/queue/create.js', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        fs.writeFile(sourcefile,data, function (err) {
          if (err) return console.log(err);
          console.log('queue create process has been done');
        });

      });




      return;
    }



  }

});

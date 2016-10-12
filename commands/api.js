#!/usr/bin/env node

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

      if(this['argv'].hasOwnProperty('version'))
      {
        var version=this.argv['version'];
      }
      else
      {
        var path=appDir.replace('/commands','');

        var config=require(""+path+"/config/config");
        var version='v'+config.version;
      }


      if(i!=="version")
      {
        try {
          fs.statSync('./app/api/node/'+version+'/'+i+'');
        } catch(e) {
          fs.mkdirSync('./app/api/node/'+version+'/'+i+'');
          fs.mkdirSync('./app/api/node/'+version+'/'+i+'/model');

          fs.writeFile('./app/api/node/'+version+'/'+i+'/model/index.js','module.exports = { user : function (callback) {    } };', function (err) {
            if (err) return console.log(err);
          });
        }

        var file='./app/api/node/'+version+'/'+i+'/'+this.argv[i]+'.js';
        var namespace=this.argv[i];
      }

      fs.readFile('./commands/execution/api/create.js', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        var filedata=data.replace(new RegExp('blogExampleServiceName', 'g'),namespace);


        fs.writeFile(file,filedata, function (err) {
          if (err) return console.log(err);
          console.log('api create process has been done');
        });

      });




      return;
    }

  }

});

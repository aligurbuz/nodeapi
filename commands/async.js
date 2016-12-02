#!/usr/bin/env '+this.argv['dir']+'

//usage : node commands/async get --modul [parallel] --file node:v1:tour:index[or source/index or handle/index or model/index]

"use strict";

var path = require('path');
var appDir = path.dirname(require.main.filename);

var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true
});

cli.on("get", function(){

  var fs = require('fs');
  fs = require('fs');


    if(this.argv['i']!=="_" && this.argv['i']!=="notNull")
    {

      var fs = require('fs');

      var asyncfile=this.argv['file'];


      fs.readFile('./commands/execution/async/'+this.argv['modul']+'.js', 'utf8', function (err,asyncdata) {
        if (err) {
          return console.log(err);
        }

        var async=asyncdata;

        var file=asyncfile.split(":");

        fs.readFile('./app/api/'+file[0]+'/'+file[1]+'/'+file[2]+'/'+file[3]+'.js', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }

          var filedata=data.replace(new RegExp('//mynode', 'g'),async);


          fs.writeFile('./app/api/'+file[0]+'/'+file[1]+'/'+file[2]+'/'+file[3]+'.js',filedata, function (err) {
            if (err) return console.log(err);
            console.log('async modul successfull');
          });

        });

      });



      return;
    }



});

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
    if(!this['argv'].hasOwnProperty('file'))
    {
      if(this['argv'].hasOwnProperty('dir')==false)
      {
        console.log('error : you have to identify a directory name');
        return;
      }
    }


    if(i!=="_" && i!=="notNull" && i!=="dir")
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
        var version='v'+config['api']['version'];
      }


      if(!this['argv'].hasOwnProperty('file'))
      {
        if(i!=="version")
        {


          try {
            fs.statSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'');
          } catch(e) {
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'');
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/model');

            /*fs.writeFile('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/model/index.js','module.exports = { user : function (callback) {    } };', function (err) {
              if (err) return console.log(err);
            });*/
          }

          try {
            fs.statSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/model');
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/model/'+this.argv[i]+'');
          } catch(e) {
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/model');
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/model/'+this.argv[i]+'');
          }

          try {
            fs.statSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/source');
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/source/'+this.argv[i]+'');
          } catch(e) {
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/source');
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/source/'+this.argv[i]+'');
          }

          try {
            fs.statSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/handle');
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/handle/'+this.argv[i]+'');
          } catch(e) {
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/handle');
            fs.mkdirSync('./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/handle/'+this.argv[i]+'');
          }

          if(!this['argv'].hasOwnProperty('no'))
          {
            var file='./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/'+this.argv[i]+'.js';
          }

          var sourcefile='./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/source/'+this.argv[i]+'/'+this.argv[i]+'.js';
          var modelfile='./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/model/'+this.argv[i]+'/'+this.argv[i]+'.js';
          var handlefile='./app/api/'+this.argv['dir']+'/'+version+'/'+i+'/handle/'+this.argv[i]+'/'+this.argv[i]+'.js';
          var namespace=this.argv[i];
        }

        if(!this['argv'].hasOwnProperty('no')) {

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
        }


        fs.readFile('./commands/execution/api/model.js', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }



          fs.writeFile(modelfile,data, function (err) {
            if (err) return console.log(err);
            console.log('api create model file process has been done');
          });

        });



        fs.readFile('./commands/execution/api/source.js', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }

          var sourcefiledata=data.replace(new RegExp('blogExampleServiceName', 'g'),namespace);


          fs.writeFile(sourcefile,sourcefiledata, function (err) {
            if (err) return console.log(err);
            console.log('api create source file process has been done');
          });

        });


        fs.readFile('./commands/execution/api/handle.js', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }

          var handlefiledata=data.replace(new RegExp('blogExampleServiceName', 'g'),namespace);


          fs.writeFile(handlefile,handlefiledata, function (err) {
            if (err) return console.log(err);
            console.log('api create handle file process has been done');
          });

        });

      }

      //single file create
      else {

        var file=this.argv['file'];
        var filesplit=file.split(":");

        //source single file
        if(filesplit[1]=="source") {

          var sourcefile='./app/api/'+this.argv['dir']+'/'+version+'/'+filesplit[0]+'/source/'+filesplit[2]+'/'+filesplit[3]+'.js';

          fs.readFile('./commands/execution/api/source.js', 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }

            var sourcefiledata=data.replace(new RegExp('blogExampleServiceName', 'g'),filesplit[3]);


            fs.writeFile(sourcefile,sourcefiledata, function (err) {
              if (err) return console.log(err);
              console.log('api create source file process has been done');
            });

          });
        }


        //model single file
        if(filesplit[1]=="model") {

          var modelfile='./app/api/'+this.argv['dir']+'/'+version+'/'+filesplit[0]+'/model/'+filesplit[2]+'/'+filesplit[3]+'.js';

          fs.readFile('./commands/execution/api/model.js', 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }


            fs.writeFile(modelfile,data, function (err) {
              if (err) return console.log(err);
              console.log('api create model file process has been done');
            });

          });
        }


        //handle single file
        if(filesplit[1]=="handle") {

          var handlefile='./app/api/'+this.argv['dir']+'/'+version+'/'+filesplit[0]+'/handle/'+filesplit[2]+'/'+filesplit[3]+'.js';

          fs.readFile('./commands/execution/api/handle.js', 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }

            var handlefiledata=data.replace(new RegExp('blogExampleServiceName', 'g'),filesplit[3]);


            fs.writeFile(handlefile,handlefiledata, function (err) {
              if (err) return console.log(err);
              console.log('api create handle file process has been done');
            });

          });
        }


      }





      return;
    }

  }

});

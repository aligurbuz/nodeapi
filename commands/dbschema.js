#!/usr/bin/env '+this.argv['dir']+'

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

  fs.readFile('./node_modules/sequelize-auto/lib/index.js', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }



    var changedata=data.replace(new RegExp("directory: './models',", "g"),"directory: './model/schemas',");

    fs.writeFile('./node_modules/sequelize-auto/lib/index.js',changedata, function (err) {
      if (err) return console.log(err);
      console.log('sequelize-auto sycn true');

    });

  });

  global.environment="development";
  var SequelizeAuto = require('sequelize-auto')
  var database=require("../config/database")
var auto = new SequelizeAuto(database.database, database.user, database.password);

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

});

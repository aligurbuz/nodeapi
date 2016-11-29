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

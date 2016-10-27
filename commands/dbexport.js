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


  for (var i in this.argv)
  {

    if(i!=="_" && i!=="notNull")
    {
      var SequelizeAuto = require('sequelize-auto')
      var database=require("../config/database")

      if(this.argv[i]=="all")
      {
        var options={}
      }
      else
      {
        var options={tables :[this.argv[i]]}
      }

      var auto = new SequelizeAuto(database.database, database.user, database.password,options);

      auto.run(function (err) {
        if (err) throw err;

        console.log(auto.tables); // table list
        console.log(auto.foreignKeys); // foreign key list
      });
    }

  }

});

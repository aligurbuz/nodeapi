#!/usr/bin/env node

"use strict";

var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true
});

cli.on("unicorn", function(){
 console.log("unicorn");
});

cli.on("test", function(){
  console.log("test");
});
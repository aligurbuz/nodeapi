/**
 * Get config for app settings.
 *
 * @param {object} req
 * @public config.js
 */
GLOBAL.config = require("./config/config");

/**
 * Get base provider for app.
 *
 * @param {object} req
 * @public config.js
 */
GLOBAL.base = require("./provider/base");

/**
 * Start express project.
 *
 * @param {object} req
 * @public
 */
var express=require("express");

/**
 * get express method--top level
 *
 * @param {object} req
 * @public
 */
var app=express();

/**
 * express route .
 *
 * @param {object} req
 * @public
 */
app.get("/service/:name",function (request,response,next)
{

  //auth check
  //if(auth.get(req)) { return next();}
  return next();

  //json authorize false
  //res.setHeader('Content-Type', 'application/json');
  //res.json({"success":false,"message":"You are not authorized for this service"});

//next blog
},function (request,response,next)
{

  /**
   * Get config for app settings.
   *
   * @param {object} req
   * @public config.js
   */
  GLOBAL.req=request;

  //json authorize true
  response.setHeader('Content-Type', 'application/json');

  //get name
  var name=request.params.name;

  if(name==="test")
  {
    //get controller
    var controller=require("./app/test");
  }
  else
  {

    //get controller
    var controller=require("./app/v"+config.version+"/"+name+"/index");
  }

  //response
  response.json({"success":true,"data":controller.index()});

});

/**
 * listen port.
 *
 * @param {object} req
 * @public
 */
app.listen(config.port);
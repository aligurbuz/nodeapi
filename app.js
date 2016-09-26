/**
 * get path for main directory.
 *
 * @param {object} req
 * @public
 */
GLOBAL.path = require('path');
GLOBAL.appDir = path.dirname(require.main.filename);

/**
 * Get config for app settings.
 *
 * @param {object} req
 * @public config.js
 */
global.config = require("./config/config");

/**
 * Get config for app settings.
 *
 * @param {object} req
 * @public config.js
 */
global.promise = require("promise");

/**
 * Get base provider for app.
 *
 * @param {object} req
 * @public config.js
 */
global.base = require("./provider/base");

/**
 * Get service provider for app.
 *
 * @param {object} req
 * @public config.js
 */
global.service = require("./provider/service");

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
   * Get global request for app settings.
   *
   * @param {object} req
   * @public config.js
   */
  global.req=request;

  /**
   * Get global response for app settings.
   *
   * @param {object} req
   * @public config.js
   */
  global.res=response;

  //json authorize true
  response.setHeader('Content-Type', 'application/json');
  //buydu sildin

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

  controller.index(function (data)
  {
    if(typeof data!=="object")
    {
      res.json({"success":false,"message":"data is not object"});
    }
    res.json({success:true,data:data});
  });

});


/**
 * listen port.
 *
 * @param {object} req
 * @public
 */
app.listen(config.port);
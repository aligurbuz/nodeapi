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
global.async = require("async");

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

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.all("/api/service/:name/:method?",function (request,response,next)
{

  //auth check
  var auth=require("./middleware/auth");
  if(auth.get(request)) { return next();}

  //json authorize false
  response.setHeader('Content-Type', 'application/json');
  response.json({"success":false,"message":"You are not authorized for this service"});

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

  //get method
  var method=request.params.method;

  if(name==="test")
  {
    //get controller
    var controller=require("./app/test");
  }
  else
  {

    //get controller
    var controller=require("./app/api/v"+config.version+"/"+name+"/index");


  }

  if(method)
  {
    //get method if it is true
    var myfunc=controller[method];
  }
  else
  {
    //get method if it is false
    var myfunc=controller.index;
  }

  global.model=require("./app/api/v"+config.version+"/"+name+"/model/index");

  if(typeof myfunc=="function")
  {
    myfunc(function (data)
    {
      if(typeof data!=="object")
      {
        res.json({"success":false,"message":"data is not object"});
      }

      res.json({success:true,data:data});
    });
  }
  else
  {
    res.json({"success":false,"message":"no access"});
  }


});


/**
 * listen port.
 *
 * @param {object} req
 * @public
 */
app.listen(config.port);
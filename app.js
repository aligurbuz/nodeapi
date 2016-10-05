/**
 * get path for main directory.
 *
 * @param {object} req
 * @public
 */
global.path = require('path');
global.appDir = path.dirname(require.main.filename);

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
 * express route body parser .
 *
 * @param {object} req
 * @public
 */
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


/**
 * express static public path .
 *
 * @param {object} req
 * @public
 */
app.use('/static',express.static(__dirname + '/app/http/public'));

/**
 * express route .
 *
 * @param {object} req
 * @public
 */
app.all("/:name/:method?/:ext?",function (request,response,next)
{
  //get name
  var name=request.params.name;

  //get name
  var ext=request.params.ext;

  //get method
  if(request.params.method)
  {
    var method=request.params.method;
  }
  else
  {
    //url admin
    if(name==config.adminDir)
    {
      //redirect login
      var fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
      response.writeHead(302, {
        'Location': ''+fullUrl+'/login'
      });
      response.end();
    }

    //get method name
    var method=request.params.method;

  }

  /**
   * express twig set .
   *
   * @param {object} req
   * @public
   */
  var Twig = require("twig");

  // This section is optional and used to configure twig.
  app.set("twig options", { strict_variables: false });


  //url admin
  if(name==config.adminDir)
  {
    //get config admin dir
    var admin=config.adminDir;

    //normal controller data
    var controllers=require("./app/http/controllers/"+admin+"/"+method+"/"+method);

    //view path set
    app.set('views', './app/http/views/'+config.adminDir+'/'+config.adminTemp+'/'+method+'');
  }
  else
  {
    //normal url controller data
    var controllers=require("./app/http/controllers/"+name+"/"+name);

    //view path set
    app.set('views', './app/http/views/'+config.template+'/'+name+'');
  }

  //view engine
  app.set('view engine', 'twig');


  //return controllers callback
  controllers.index(function(result)
  {
    //static data passing for view
    var static = request.protocol + '://' + request.get('host')+'/static';

    //response
    response.render(result.view,{base:{static:static},data:result.data});
  });
});



/**
 * express api url set .
 *
 * @param {object} req
 * @public
 */
app.all("/api/:project/service/:name/:method?",function (request,response,next)
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

  //get project name
  var project_name=request.params.project;

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
    var controller=require("./app/api/"+project_name+"/v"+config.version+"/"+name+"/index");


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

  //set global model
  global.model=require("./app/api/"+project_name+"/v"+config.version+"/"+name+"/model/index");

  if(typeof myfunc=="function")
  {
    myfunc(function (data)
    {
      if(typeof data!=="object")
      {
        //res.json
        res.json({"success":false,"message":"data is not object"});
      }

      //res.json
      res.json({success:true,data:data});
    });
  }
  else
  {
    //res.json
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
/**
 * get path for main directory.
 *
 * @param {object} req
 * @public
 */
global.in_array=require("in_array");

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

var http = require('http').Server(app);

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

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon.ico'));

/**
 * express route .
 *
 * @param {object} req
 * @public
 */
app.all("/:name/:method?/:ext?",function (request,response,next)
{
  if(request.params.name=="favicon.ico")
  {
    response.send("favicon.ico")
  }
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
   * Get service query database for app.
   *
   * @param {object} req
   * @public config.js
   */
  global.query=require("./packages/seqmod/main");

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

app.use(function(req,res,next){
// Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.all("/api/:project/service/:name/:method?",function (request,response,next)
{

  //global static calls
  var staticApp=require("./config/staticApp");
  for (var i in staticApp) {
    var app=i+'_app';
    var app=require(staticApp[i]);
    global[i]=new app();
  }


  //auth check
  var auth=require("./middleware/auth");
  global.req=request;
  if(auth.get(request)) { return next();}


  //json authorize false
  response.setHeader('Content-Type', 'application/json');
  response.json({"success":false,"message":"You are not authorized for this service"});

//next blog
},function (request,response,next)
{

  response.setHeader('Content-Type', 'application/json');

  /**
   * service request type.
   *
   * @param {object} req
   * @public config.js
   */
   var version=config['api']['version'];

  /**
   * service request type.
   *
   * @param {object} req
   * @public config.js
   */
    if(request.method=="GET")
    {
      var requestMethod="get";
    }
    else
    {
      var requestMethod='post';
    }


  /**
   * Get global request for app settings.
   *
   * @param {object} req
   * @public config.js
   */
  global.req=request;


  /**
   * Get global environment for app settings.
   *
   * @param {object} req
   * @public config.js
   */
  global.environment=app.get("env");

  /**
   * Get global response for app settings.
   *
   * @param {object} req
   * @public config.js
   */
  global.res=response;

  //get name
  var name=request.params.name;

  //get project name
  var project_name=request.params.project;

  //get method
  var method=request.params.method;

  /**
   * Get base provider for app.
   *
   * @param {object} req
   * @public config.js
   */
  global.base = require("./provider/api/base");

  /**
   * Get service provider for app.
   *
   * @param {object} req
   * @public config.js
   */
  global.service = require("./provider/service");

  /**
   * Get service provider for app.
   *
   * @param {object} req
   * @public config.js
   */
  var Source = require("./app/api/source");
  global.source=new Source();

  /**
   * Get service query database for app.
   *
   * @param {object} req
   * @public config.js
   */
  //global.query=require("./packages/seqmod/main");
  var Query=require(""+appDir+"/packages/seqmod/main");
  global.query=new Query();

  if(name==="test")
  {
    //get controller
    var controller=require("./app/test");
  }
  else
  {

    var undersplit=name.split("_");

    if(undersplit.hasOwnProperty("1"))
    {
      var fileindex=undersplit[1];
      var dir=undersplit[0];
    }
    else
    {
      var fileindex='index';
      var dir=name;
    }

    if(method)
    {
      //get method if it is true
      var apimethod=method;
    }
    else
    {
      //get method if it is false
      var apimethod='index';
    }

    //get provision method
    var provision_method=''+project_name+'_v'+config['api']['version']+'_'+dir+'_index_'+apimethod;

    if(requestMethod=="get") {

      var exceptFor='exceptForGet';
    }
    else {

      var exceptFor='exceptForPost';
    }

    //provision object set
    var provisionObject={};

    //get provision
    var provision=require("./app/api/provision");

    //get call provision
    var provisionMethodHasOwnProperty=false;

    //get has check
    if(typeof provision[provision_method]=="function") {
      var provisionMethodHasOwnProperty=true;
    }


    //get callback provision
    provision[requestMethod](function(provision_result) {

      //success true
      if(provision_result.success) {

        if(provisionMethodHasOwnProperty) {

          //get callback provision
          provision[provision_method](function(provision_result) {

            //success true
            if(provision_result.success) {

              provisionObject.success=true;
            }
            else {

              //success false
              provisionObject.success=false;
              provisionObject.message=provision_result.message;
            }
          });
        }
        else {

          //success true
          provisionObject.success=true;
        }
      }
      else {

        provision[exceptFor](function(except) {

          if(in_array(provision_method,except)) {
            //success true
            provisionObject.success=true;
          }
          else {
            //success false
            provisionObject.success=false;
            provisionObject.message=provision_result.message;
          }

        });


      }
    });


    if(!provisionObject.success) {

      //res.json
      //json authorize true
      res.json({success:false,message:provisionObject.message});
      return;
    }

    //check file exists
    var apifileexists="./app/api/"+project_name+"/v"+version+"/"+dir+"/"+fileindex+".js";

    //get file exists control
    var fileExists = require('file-exists');

    //true or false
    if(fileExists(apifileexists))
    {
      //get controller
      var Controller=require("./app/api/"+project_name+"/v"+version+"/"+dir+"/"+fileindex);
      var controller=new Controller();
    }
    else
    {
      //res.json
      //json authorize true
      res.json({success:false,message:"Invalid Service"});
    }

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

  if(typeof myfunc=="function")
  {
    myfunc(function (data)
    {
      var data={result:data};

      if(typeof data!=="object")
      {
        //res.json
        res.json({"success":false,"message":"data is not object"});
      }

      //object loader run
      if(config['api']['objectLoader'])
      {
        var objectLoader=require("./app/api/objectLoader");

        var objectLoaderParams={
          version : 'v'+version,
          project_name : project_name
        }
        objectLoader[requestMethod](objectLoaderParams,function(object) {

          if(typeof object=="object") {
            objectLoader[exceptFor](objectLoaderParams,function(except) {

              if(!in_array(provision_method,except))
              {
                data=base.merge(object,data);
              }

              if(typeof objectLoader[provision_method]=="function") {

                objectLoader[provision_method](objectLoaderParams,function(special)
                {
                  data=base.merge(special,data);
                })

              }

            })

          }

        })
      }

      //res.json
      //json authorize true
      response.setHeader('Content-Type', 'application/json');

      if(!config['api']['logging']['status'])
      {
          res.json({success:true,data:data});
      }
      else {
        var log=require("./logging");

        var logging=log[config['api']['logging']['adapter']];

        var loggingData={
          client    : base.namespace(),
          server    : data
        }

        logging(loggingData,function(result){

          if(result){
            res.json({success:true,data:data});
          }
          else {
            res.json({success:false,msg:'Logging False'});
          }

        })
      }







    });
  }
  else
  {
    //res.json
    //json authorize true
    response.setHeader('Content-Type', 'application/json');
    res.json({"success":false,"message":"no access"});
  }


});


/**
 * listen port.
 *
 * @param {object} req
 * @public
 */
http.listen(config.port);

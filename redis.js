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
app.get("/redis",function (request,response,next)
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


  //response
  response.send("redis");

});

/**
 * listen port.
 *
 * @param {object} req
 * @public
 */
app.listen(3001);
//in array module
var in_array = require('in_array');
var configtoken=require(""+appDir+"/config/token");

// exports function
module.exports =
{

  get: function (req)
  {
    //get token
    var token=req.query._token;

    //token control
    if(in_array(token,configtoken))
    {
      //true
      return true;
    }

    //false
    return false;
  }
};

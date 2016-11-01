/**
 * middleware auth for all services
 * Function base module ; api service
 * auth methods are condition for access to service
 * Examples:
 *
 *     // token check
 *     //return : token for client
 *
 *
 * @param {String|Array} types...
 * @return {json}
 * @return
 */

//in array module
var in_array = require('in_array');

//load tokens for all services
var configtoken=require(""+appDir+"/config/token");

// exports function
module.exports =
{
  get: function (req)
  {
    /**
     * req params
     * get token from url data
    */
    var token=req.query._token;

    //get TokenForUsers function from token
    var userTokens=configtoken.TokenForUsers();

    /**
     * in_array module
     * check token from url data
    */
    if(in_array(token,userTokens)){
        return true;
    }
    return false;



  }
};

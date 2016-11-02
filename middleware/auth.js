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
     * get name from url data
    */
    var name=req.params.name;

    /**
     * req params
     * get project_name from url data
    */
    var project_name=req.params.project;

    /**
     * req params
     * get method from url data
    */
    var method=req.params.method;

    /**
     * req params
     * get token from url data
    */
    var token=req.query._token;

    //name explode
    var undersplit=name.split("_");

    //check 1 array_keys
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

    /**
     * provision method
     * it is unique class name
    */
    var provision_method=''+project_name+'_'+dir+'_'+fileindex+'_'+apimethod;

    /**
     * req params accessWithoutToken
     * access without token if the provision_method is in accessWithoutToken
    */
    if(in_array(provision_method,configtoken['accessWithoutToken']())) {
      return true;
    }

    /**
     * req params accessWithoutToken
     * access without token if the 'all' is in accessWithoutToken
    */
    if(in_array('all',configtoken['accessWithoutToken']())) {
      return true;
    }

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

/**
 * base function for all services
 * Function base module ; api service
 * base methods are useful definitions
 * Examples:
 *
 *     // base.ip()
 *     //return : client ip
 *
 *
 * @param {String|Array} types...
 * @return {json}
 * @return
 */

module.exports = {

  /**
   * namespace for all services
   * Function namespace module ; api namespace service
   * get service namespace for your services
   * Examples:
   *
   *     // base.namespace()
   *     //return : service namespace
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */

  namespace: function () {

    //get name
    var name=req.params.name;

    //get project name
    var project_name=req.params.project;

    //get method
    var method=req.params.method;

    var undersplit=name.split("_");

    if(undersplit.hasOwnProperty("1")){
      var fileindex=undersplit[1];
      var dir=undersplit[0];
    }
    else{
      var fileindex='index';
      var dir=name;
    }

    if(method){
      //get method if it is true
      var apimethod=method;
    }
    else{
      //get method if it is false
      var apimethod='index';
    }

    var namespace={};

    //get namespace method
    namespace.file='app/api/'+project_name+'/v'+config['api']['version']+'/'+dir+'/'+fileindex+'/'+apimethod;
    namespace.serviceName=dir;
    namespace.directory='app/api/'+project_name+'/v'+config['api']['version']+'/'+dir+'';
    namespace.index=fileindex;
    namespace.project=project_name;
    namespace.version=config['api']['version'];
    namespace.versionPath='app/api/'+project_name+'/v'+config['api']['version']+'';
    namespace.clientIp=base.ip();
    namespace.clientDevice=base.getDevice();
    namespace.clientToken=base.token();
    namespace.clientHost=base.host();
    namespace.clientRequestTime=new Date().getTime();
    namespace.clientHttpHeaders=base.httpHeaders();
    //return
    return namespace;

  },

  /**
   * base ip method for all services
   * Function base module ; api ip service
   * get client ip for your services
   * Examples:
   *
   *     // base.ip()
   *     //return : client ip
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */

  ip: function () {

    //get ip from request variable
    var ip=req.connection.remoteAddress;

    //ip replace
    var ip=ip.replace("::ffff:","",ip);

    //return
    return ip;
  },


  /**
   * base token method for all services
   * Function base module ; api token service
   * get client token for your services
   * Examples:
   *
   *     // base.token()
   *     //return : client token
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */

  token: function () {

    /**
     * req params
     * get token from url data
    */
    var token=req.query._token;

    if(token)
    {
      var in_array=require("in_array");
      var configtoken=require(""+appDir+"/config/token");

      if(in_array(token,configtoken['TokenForUsers']()))
      {
        return {
          statu : true,
          get : token
        }
      }
      else {

        return {
          statu : false
        }
      }

    }
    else {
      return {
        statu : false
      }
    }
  },

  /**
   * base host method for all services
   * Function base module ; api host service
   * get client host name for your services
   * Examples:
   *
   *     // base.host()
   *     //return : client host name
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */

  host : function()
  {
    //get host from request variable
    var host=req.headers.host;

    //host name replace
    var host=host.replace(":"+config.port,"",host);

    //return
    return host;
  },


  /**
   * base http header method for all services
   * Function base module ; api header service
   * get client http headers for your services
   * Examples:
   *
   *     // base.httpHeaders()
   *     //return : client host name
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */

  httpHeaders : function(key=null)
  {
    if(key==null)
    {
      return req.headers;
    }
    else {
      return req['headers'][key];
    }
  },

  /**
   * base device method for all services
   * Function base module ; api device service
   * get client device information for your services
   * Examples:
   *
   *     // base.getDevice()
   *     //return : client device information
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */
  getDevice :function ()
  {
    //get useragent package
    var useragent = require('useragent');

    //get agent
    var agent = useragent.parse(req.headers['user-agent']);

    //agent
    return agent;
  },

  /**
   * merge two different object keys for all services
   * Function base module ; api merge service for objects
   * get client merge information for your services
   * Examples:
   *
   *     // base.merge(obj1,obj2)
   *     //return : client device information
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */
  merge :function (obj1,obj2)
  {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }


  ,


  /**
   * merge two different object keys for all services
   * Function base module ; api merge service for objects
   * get client merge information for your services
   * Examples:
   *
   *     // base.merge(obj1,obj2)
   *     //return : client device information
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */
  exceptObjectKey :function (obj,except)
  {
     var list={};

     var in_array=require("in_array");

     for(var index in obj) {
        if(!in_array(index,except))
        {
          list['index']=obj[index];
        }
     }

     return list;
  }
};

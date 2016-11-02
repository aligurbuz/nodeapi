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
};

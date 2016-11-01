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
  }
};

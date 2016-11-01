/**
 * token function for all services
 * Function base module ; api service
 * token methods are condition for access to service
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

  TokenForUsers: function () {

    /**
     * tokens for all services
     * @type : array
    */
    var tokens=[
      'testuser'
    ];

    /**
     * return tokens
    */
    return tokens;

  }
};

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
      'myToken'
    ];

    /**
     * return tokens
    */
    return tokens;

  },


  /**
   * restriction access for services
   * Function base module ; restriction api service
   * get client restrictions for your services
   *
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */

  restrictions: function () {

    /**
     * tokens for all services
     * provision method
     * projectName_Directory_File_Method
     * @type : array
    */
    return {
      'anyTokenName' : {
        ip : '192.168.33.1'
      }
    };

  },

  /**
   * access without token for services
   * Function base module ; api not token service
   * get client token for your services
   * Examples:
   *
   *     // base.accessWithoutToken()
   *     //return : client without token array
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */

  accessWithoutToken: function () {

    /**
     * tokens for all services
     * provision method
     * projectName_Directory_File_Method
     * @type : array
    */
    return {
      'all' : {
        ip : [
          'none'
        ]
      }
    };

  },



  /**
   * query restriction access for services
   * Function base module ; query restriction api service
   * get client restrictions for your services
   *
   *
   *
   * @param {String|Array} types...
   * @return {json}
   * @return
   */

  query_restrictions: function () {

    /**
     * query restrictions for all services
     * query restrictions method
     * @type : array
    */
    return {
      ip : {
        '192.168.33.1' : {
          select      :false,
          where       :false
        }
      },

      token : {
        'testuser' : {
          select      :false,
          where       :false
        }
      }


    };

  }
};

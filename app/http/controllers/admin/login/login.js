/**
 * Function blog method ; index
 * Examples:
 *
 *     // Accept: application/json
 *     promise then catch methoding
 *
 * @param {String|Array} types...
 * @return {json}
 * @public
 */

class login {

  index(callback) {

    //login view
    callback({view:'login',data:{}});
  }


}

module.exports=new login();
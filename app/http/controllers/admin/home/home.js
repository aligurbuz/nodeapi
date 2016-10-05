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

class home {

  index(callback) {

    //login view
    callback({view:'home',data:{}});
  }


}

module.exports=new home();
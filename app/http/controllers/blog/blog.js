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

class blog {

  index(callback) {

    //login view
    callback({view:'blog',data:{}});

  }


}

module.exports=new blog();
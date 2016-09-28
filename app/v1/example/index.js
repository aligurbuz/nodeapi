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

    /////////////////////////////////////
    new Promise(function(resolve,reject) {

      //set data object
      var data = new Object();
      data.test="test";

    })

      ////////////////////////////
      //promise then
      .then(function(data) {
        callback(data);
      })

      ///////////////////////////
      //promise catch
      .catch(function(error) {
        callback(error);
      });

  }

}

module.exports=new blog();
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

    //set data object
    var data = new Object();

    /////////////////////////////////////
    //async parallel
    async.parallel([

      function (asyncCall) {
        //data here
        data.test="test";
        asyncCall(null,data);
      }

    ],
      /////////////////////////////////////
      //async parallel result
      function(err,results) {
        callback(results);
      });

  }

}

module.exports=new blog();
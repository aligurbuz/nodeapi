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

    function (asyncCall)
    {
      //model get user
      model.user(function(user) {
        data.result=user;
        asyncCall(null,data);

      });
    }


  ],function(err,results)
    {
      callback(results);
    });


  }

  /**
   * Function blog method ; create
   * Examples:
   *
   *     // Accept: application/json
   *     promise then catch methoding
   *
   * @param {String|Array} types...
   * @return {json}
   * @public
   */
  create(callback) {

    //set data object
    var data = new Object();

    /////////////////////////////////////
    //async parallel
    async.parallel([

      function (asyncCall)
      {
        //model create
        model.create(function(result) {
          data.postStatus=result;
          asyncCall(null,data);
        });
      }

    ],function (err,results)
    {
      callback(results);
    });


  }

}

module.exports=new blog();
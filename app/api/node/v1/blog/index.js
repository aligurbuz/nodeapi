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
    //async parallel
    async.parallel({

        result : function (asyncCall) {
          //model get user
          model.user(function(user) {
            asyncCall(null,user);
          });

        },

        redis : function (asyncCall) {
          service.get("redis",function(redis) {
            asyncCall(null,redis);
          },{type:'get',get:'foo'});
        }

  },
      /////////////////////////////////////
      //async parallel result
      function(err,results) {
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

      function (asyncCall) {
        //model create
        model.create(function(result) {
          data.postStatus=result;
          asyncCall(null,data);
        });
      }

    ],
      /////////////////////////////////////
      //async parallel result
      function (err,results) {
        callback(results);
      });


  }

}

module.exports=new blog();
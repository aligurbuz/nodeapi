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

    var start = new Date().getTime();
    /////////////////////////////////////
    //async parallel
    async.parallel({

        result : function (asyncCall) {
          //model get user
          model.user(function(user) {
            asyncCall(null,{time : new Date().getTime()-start,call:user});
          });

        },

        redis : function (asyncCall) {
          service.get("redis",function(redis) {
            asyncCall(null,{time : new Date().getTime()-start,call:redis});
          },{type:'get',get:'foo'});
        }

  },
      /////////////////////////////////////
      //async parallel result
      function(err,results) {
        callback({time : new Date().getTime()-start,call:results});
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
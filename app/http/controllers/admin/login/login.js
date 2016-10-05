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

    /////////////////////////////////////
    //async parallel
    async.parallel({

        title : function (asyncCall) {

          asyncCall(null,"hey");

        },

        message : function (asyncCall) {

          asyncCall(null,"oww!! Welcome");

        }

      },
      /////////////////////////////////////
      //async parallel result
      function(err,results) {
        callback({view:'login',data:results});
      });


  }


}

module.exports=new login();
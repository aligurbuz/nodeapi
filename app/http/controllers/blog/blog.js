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
        callback({pug:'index',data:results});
      });


  }


}

module.exports=new blog();
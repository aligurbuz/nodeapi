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
class chat {

  index(callback) {

    //set data object
    var data = new Object();

    /////////////////////////////////////
    //async parallel
    async.parallel({

        result : function (asyncCall) {
          //model get user
          model.chat(function(chat) {
            asyncCall(null,chat);
          });

        }

      },
      /////////////////////////////////////
      //async parallel result
      function(err,results) {
        callback(results);
      });

  }

}

module.exports=new chat();
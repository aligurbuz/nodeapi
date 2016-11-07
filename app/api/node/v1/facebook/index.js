/**
 * Function api method ; index
 * Examples:
 *
 *     // Accept: application/json
 *     promise then catch methoding
 *
 * @param {String|Array} types...
 * @return {json}
 * @public
 */
class index {

  //main method
  index(callback) {

    /*
     Add altering object here.
     Return a async modul to correctly handle asynchronicity.

     Example:
     return callback(result);
     */
     async.parallel({

       /*
        Add example initial.
        Return a async modul to correctly handle asynchronicity.

        Example:
        return callback(result);
        */
         example : function (asyncCall) {
           source.name("index").get(function(source){
             asyncCall(null,source)
           })
         }

   },
     /*
      async then modul.
      Return a async modul to correctly handle asynchronicity.

      Example:
      return callback(result);
      */
       function(err,results) {
         callback(results);
       });


  }

}

//module exports class object
module.exports=new index();

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
         },

         select : function (asyncCall) {
           asyncCall(null,req.body.select)
         },

         token : function (asyncCall) {
           asyncCall(null,base.token())
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

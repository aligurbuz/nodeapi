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
  index(callback,sourcedata) {

    /*
     Add altering object here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return callback({test:'hello world'});
     */

    //return callback
    getStatic.call(function(result) {
      callback(result);
    });


  }

}

//module exports class object
module.exports=new index();

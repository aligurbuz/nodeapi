 var source=require("./app/api/source");

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
    callback("test");


  }


  //main method
  index2(callback,sourcedata) {

    /*
     Add altering object here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return callback({test:'hello world'});
     */

    //return callback
    callback("test index2");


  }

}

//module exports class object
module.exports=new index();

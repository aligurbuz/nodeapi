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
class blogExampleServiceName {

  //main method
  index(callback) {

    /*
     Add altering object here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return callback({test:'hello world'});
     */

    //set new object
    var data = new Object();

    //set example object
    data.result="hello world";

    //return callback
    callback(data);


  }

}

//module exports class object
module.exports=new blogExampleServiceName();
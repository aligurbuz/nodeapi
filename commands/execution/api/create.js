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
     Return a async modul to correctly handle asynchronicity.

     Example:
     return callback(result);
     */
     var data={
       result : 'blogExampleServiceName'
     }

     //callback
     callback(data)


  }

}

//module exports class object
module.exports=new blogExampleServiceName();

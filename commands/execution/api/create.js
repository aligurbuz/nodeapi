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
class blogExampleServiceName {

  index(callback) {

    //set data object
    var data = new Object();
    data.test="hello world";
    callback(data);

  }

}

module.exports=new blogExampleServiceName();
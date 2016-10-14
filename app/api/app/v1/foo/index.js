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
class index {

  index(callback) {

    //set data object
    var data = new Object();
    data.test="hello world";

    model.get(function(result)
    {
      data.result=result;
      callback(data);
    });


  }

}

module.exports=new index();
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

     //callback

     var elasticsearch={
       name: 'elasticsearch',
       method:'search'
     }

     var search={
       index        : 'node',
       type         : 'teknasyon',
       query        : {
         query: {
           match: { "firstName": "emir" }
         }
       }
     }

     service.get(elasticsearch,function(result){
       callback(result)
     },search)


  }

}

//module exports class object
module.exports=index;

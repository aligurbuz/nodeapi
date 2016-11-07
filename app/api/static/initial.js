/**
 * Function provision method ; index
 * Examples:
 *
 *     // Accept: application/json
 *     api service condition
 *     it is 'main function' called for all services
 *     it is called for just one service
 *     as 'projectName_ApiDirectory_File_Method' function name
 *
 * @param {String|Array} types...
 * @return {json}
 * @public
 */

class initial {

  get(callback) {

    /**
     * general provision get method
     * Function provision method ; api service
     * call api service project dir fileindex method
     * Examples:
     *
     *     // success :false
     *     //message : obligatory key
     *
     *     //success : true
     *     //message : no need
     *
     * @param {String|Array} types...
     * @return {json}
     * @return
     */
    source.service("twitter").get(function(result){
      callback(result);
    })

  }

}

//module exports provision
module.exports=initial;

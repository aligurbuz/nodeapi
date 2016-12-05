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

class provision {

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
     var headers=req['headers'];

     callback({success:true,message:'define message'});
  }


  exceptForGet(callback) {

    /**
     * general provision method except for get
     * Function provision method ; api service
     * it is run get method for services except specified names
     * Examples:
     *
     *     // object
     *     //[projectName_version_directory_index_method]
     *
     * @param {String|Array} types...
     * @return {json}
     * @return
     */
    callback([]);

  }


  post(callback) {

    /**
     * general provision post method
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
    callback({success:true,message:'not provision post'});

  }


  exceptForPost(callback) {

    /**
     * general provision method except for post
     * Function provision method ; api service
     * it is run get method for services except specified names
     * Examples:
     *
     *     // object
     *     //[projectName_version_directory_index_method]
     *
     * @param {String|Array} types...
     * @return {json}
     * @return
     */
    callback([]);

  }


}

//module exports provision
module.exports=new provision();

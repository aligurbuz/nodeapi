/**
 * this module is loaded if the objectloader key is true in config
 * Function object loader method ; api service
 * Examples:
 *
 *     // Accept: application/json
 *     api service condition
 *     it is automatically loaded the specified function for all services
 *     it is in array in function objects
 *     special service 'projectName_ApiDirectory_File_Method' function name
 *
 * @param {String|Array} types...
 * @return {json}
 * @public
 */

class objectLoader {

  get(params,callback) {

    /**
     * general object loader get method
     * Function object load  method ; api service
     * call api service project dir fileindex method
     * Examples:
     *
     *     // {project_name:{version:{data:data}}}
     *     //{'all':{data:data}} valid for all status
     *
     *
     * @param {String|Array} types...
     * @return {json}
     * @return
     */
    var objectParams={
      'all':{
        client:base.namespace()
      }
    }

    //return callback
    //all key is valid for every project name and version
    if(objectParams.hasOwnProperty("all")){
      callback(objectParams['all']);
    }
    else {
      //unique for project name and version
      callback(objectParams[params['project_name']][params['version']]);
    }


  }


  exceptForGet(params,callback) {

    /**
     * general object loader method except for get
     * Function object load method ; api service
     * it is not loaded automatically object to get method for services except specified names
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


  post(params,callback) {

    /**
     * general object loader post method
     * Function object load  method ; api service
     * call api service project dir fileindex method
     * Examples:
     *
     *     // {node:'api_node'}
     *     //{} empty data
     *
     *
     * @param {String|Array} types...
     * @return {json}
     * @return
     */
     var objectParams={
       'all':{
         //
       }
     }

     //return callback
     //all key is valid for every project name and version
     if(objectParams.hasOwnProperty("all")){
       callback(objectParams['all']);
     }
     else {
       //unique for project name and version
       callback(objectParams[params['project_name']][params['version']]);
     }

  }


  exceptForPost(params,callback) {

    /**
     * general object loader method except for post
     * Function object load method ; api service
     * it is not loaded automatically object to post method for services except specified names
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
module.exports=new objectLoader();

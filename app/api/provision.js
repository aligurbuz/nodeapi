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
     * general provision method
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
    callback({success:true,message:'not provision main'});

  }


  exceptForGet(callback) {

    /**
     * general provision method except for get
     * Function provision method ; api service
     * it is run get method for services except specified names
     * Examples:
     *
     *     // object
     *     //{projectName_ApiDirectory_File_Method}
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
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

class staticApi {

  constructor(){
    this.static_name='initial';
    this.static_method='get';
  }

  name(static_name) {
    this.static_name=static_name;
    return this;
  }

  method(static_method) {
    this.static_method=static_method;
    return this;
  }

  call(callback) {

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
    var StaticCall=require(""+appDir+"/app/api/static/"+this.static_name+"");
    var staticCall=new StaticCall();

    staticCall[this.static_method](function(static_result){
      callback(static_result);
    })

  }

}

//module exports provision
module.exports=staticApi;

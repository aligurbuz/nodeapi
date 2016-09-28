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
class blog {

  index(callback) {

    /////////////////////////////////////
    new Promise(function(resolve,reject) {

      //set data object
      var data = new Object();

      //model get user
      model.user(function(user) {
       data.result=user;
       resolve(data);
      });

     })

      ////////////////////////////
       //promise then
      .then(function(data) {
        callback(data);
      })

      ///////////////////////////
      //promise catch
      .catch(function(error) {
        callback(error);
      });

  }

  /**
   * Function blog method ; create
   * Examples:
   *
   *     // Accept: application/json
   *     promise then catch methoding
   *
   * @param {String|Array} types...
   * @return {json}
   * @public
   */
  create(callback) {

    /////////////////////////////////////
    //promise start
    new Promise(function(resolve,reject) {

      //set data object
      var data = new Object();

      //model create
      model.create(function(result) {
        data.postStatus=result;
        resolve(data);
      });

    })

      ////////////////////////////
      //promise then
      .then(function(data) {
        callback(data);
      })

      ////////////////////////////
      //promise catch
      .catch(function(error) {
        callback(error);
      });

  }
}

module.exports=new blog();
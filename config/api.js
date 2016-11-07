/**
 * get config arrays
 *
 * @param {object} req
 * @public config.js
 */

var api = module.exports = {

  getUser : getStatic.getUser(function(result){
    return result;
  })

};

/**
 * get config arrays
 *
 * @param {object} req
 * @public config.js
 */

var config = module.exports = {


  /**
   * port : [integer]
   * definition:
   *
   *     //that is listening to project from this port
   *     and means project port listening
   *
   */
  port            : 3000,

  /**
   * env : [string]
   * definition:
   *
   *     //that is environment of project
   *     and means development and production
   *
   */
  env             : 'development',

  /**
   * template : [string]
   * definition:
   *
   *     //that is view directory for application
   *     and means view directory
   *
   */
  template        : 'apperance1',

  /**
   * adminDir : [string]
   * definition:
   *
   *     //that is admin definition for url
   *     and means admin/ on url
   *
   */
  adminDir        : 'admin',

  /**
   * adminTemp : [string]
   * definition:
   *
   *     //that is view directory for admin application
   *     and means admin view directory
   *
   */
  adminTemp       : 'elite',

  /**
   * api config list : [object]
   * definition:
   *
   *     //that is config list for all api services
   *     and means api config manager
   *
   */
  api    : {

    /**
     * version : [integer]
     * definition:
     *
     *     //that is valid for api services
     *     and means project versioning
     *
     */
    version         : 1,

    /**
     * objectLoader : [boolean]
     * definition:
     *
     *     //that is loader automatically objects for all api services
     *     and means automatically object loads
     *
     */
    objectLoader    : false,
  },



};

/**
 * get database arrays
 *
 * @param {object} req
 * @public config.js
 */

var database = module.exports = {

  dialect                 : 'mysql',
  host                    : 'localhost',
  database                : 'Prosystem',
  user                    : 'root',
  password                : 'laraappdevman*09',
  redis_cache             : true,
  redis_cache_expire      : 60

};

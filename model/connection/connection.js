/* jshint indent: 1 */

module.exports = function(appDir,Sequelize) {
  //configuration database
  var database=require(""+appDir+"/config/database");

  //set connection
  var connection = new Sequelize(database.database,database.user,database.password, {
    host: database.host,
    dialect: database.dialect,

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  return connection;
};


//redis function
module.exports = {

  get: function () {

    //configuration database
    var database=require(""+appDir+"/config/database");

    //sequelize modul
    var Sequelize=require("sequelize");

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

    //table definition
    var Chat = connection.define('chat', {
      username: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.TEXT
      },

      status: {
        type: Sequelize.INTEGER
      }
    });

    return Chat;


  }
};

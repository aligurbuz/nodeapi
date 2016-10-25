
//redis function
module.exports = {

  get: function (Sequelize) {

    //configuration database
    var database=require(""+appDir+"/config/database");

    //set connection
    var connection = new Sequelize(database.database,database.user,database.password, {
      host: database.host,
      dialect: database.dialect,

      pool: {
        max: 50,
        min: 0,
        idle: 10000
      }
    });

    //table definition
    var Admin = connection.define('admin', {
      ccode: {
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING
      },

      fullname: {
        type: Sequelize.STRING
      },

      last_ip: {
        type: Sequelize.STRING
      },

      system_name: {
        type: Sequelize.STRING
      }
    });

    return Admin;


  }
};

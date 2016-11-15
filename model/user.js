
//redis function
module.exports = {

  get: function (Se) {

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
    var User = connection.define('user', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },

      status: {
        type: Sequelize.INTEGER
      }
    },{
      scopes : {
        activeUser : {
          where : {
            status : 1
          }
        }
      }
    });

    User.hasMany(service.model("task"));
    User.hasMany(service.model("comment"));

    return User;


  }
};

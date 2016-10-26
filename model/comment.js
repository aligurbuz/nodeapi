
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
    var comment = connection.define('comment', {
      cname: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      }
    });

    return comment;


  }
};

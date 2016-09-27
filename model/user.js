


//redis function
module.exports = {

  get: function () {

    var Sequelize=require("sequelize");
    var connection = new Sequelize('Prosystem','root','laraappdevman*09', {
      host: 'localhost',
      dialect: 'mysql',

      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },

      // SQLite only
      //storage: 'path/to/database.sqlite'
    });

    var User = connection.define('user', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    });

    return User;


  }
};

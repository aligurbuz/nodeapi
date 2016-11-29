
//redis function
module.exports = {

  get: function (Sequelize) {

    //get connection
    var con=require(""+appDir+"/model/connection/connection");

    var connection=con(appDir,Sequelize);

    var schema=require(""+appDir+"/model/schemas/users");


    var user=schema(connection,Sequelize)

    user.hasMany(service.model("task"));

    return user;


  }
};

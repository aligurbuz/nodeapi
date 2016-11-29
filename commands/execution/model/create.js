
//redis function
module.exports = {

  get: function (Sequelize) {

    //get connection
    var con=require(""+appDir+"/model/connection/connection");

    var connection=con(appDir,Sequelize);

    var schema=require(""+appDir+"/model/schemas/admins");


    var admin=schema(connection,Sequelize)

    //admin.hasMany(service.model("task"));

    return admin;


  }
};


//redis function
module.exports = {

  get: function (Sequelize) {

    //get connection
    var con=require(""+appDir+"/model/connection/connection");

    var connection=con(appDir,Sequelize);

    var schema=require(""+appDir+"/model/schemas/tasks");


    var task=schema(connection,Sequelize)

    //task.hasMany(service.model("task"));

    return task;


  }
};

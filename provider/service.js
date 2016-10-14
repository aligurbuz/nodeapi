
//redis function
module.exports = {

  get: function (service=null,callback,data=null) {


    if(service!==null)
    {
      var servicename=require(""+appDir+"/services/"+service);

      servicename.index(data,function(result)
      {
        callback(result);
      });
    }


  },

  model : function (model=null,callback)
  {
    if(model!==null)
    {
      //sequelize modul
      var Sequelize=require("sequelize");

      var modelname=require(""+appDir+"/model/"+model);
      callback(modelname.get(Sequelize),Sequelize);
    }
  }
};

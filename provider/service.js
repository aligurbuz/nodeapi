
//redis function
module.exports = {

  get: function (service=null,callback,data=null) {


    if(service!==null)
    {

      if(typeof service=="object") {
        var servicename=require(""+appDir+"/services/"+service['name']);

        servicename[service['method']](data,function(result)
        {
          callback(result);
        });
      }
      else {
        var servicename=require(""+appDir+"/services/"+service);

        servicename.index(data,function(result)
        {
          callback(result);
        });
      }

    }


  },


  request: function (data,callback) {

    if(typeof data=="object") {

      var servicename=require(""+appDir+"/services/request");

      servicename.index(data,function(result)
      {
        callback(result);
      });
    }
    else {
      callback("post data is not object data");
    }


  },

  model : function (model=null,callback)
  {
    if(model!==null)
    {
      //sequelize modul
      var Sequelize=require("sequelize");

      //require model
      var modelname=require(""+appDir+"/model/"+model);

      if(typeof callback=="function")
      {
        callback(modelname.get(Sequelize),Sequelize);
      }
      else
      {
        return modelname.get(Sequelize);
      }


    }
  }
};


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


  }
};

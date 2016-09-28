var model=require(""+appDir+"/app/v"+config.version+"/blog/model/index");

module.exports = {
  index: function (callback) {

    new Promise(function(resolve,reject)
    {
      //set array object
      var data = new Object();

      //get ip from base
      data.ip = base.ip();

      data.host=base.host();


     model.index(function(user)
     {
       data.y=user;
       resolve(data);

     });

    })

      .then(function(data)
      {
        callback(data);

      })

      .catch(function(error)
      {
        callback(error);
      });

  }
};
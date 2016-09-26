module.exports = {
  index: function (callback) {

    new Promise(function(resolve,reject)
    {
      //set array object
      var data = new Object();

      //get ip from base
      data.ip = base.ip();

      service.get("redis",function(result)
      {
        data.redis=result;
        resolve(data);

      },{type:'get',get:'foo'});

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
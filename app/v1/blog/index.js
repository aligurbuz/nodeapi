//blog function
module.exports = {
  index: function (callback) {

    //set array object
    var data = new Object();

    //get ip from base
    data.ip = base.ip();

    //get foo key from redis
    service.redis(function(result)
    {
      data.redis=result;
      callback(data);
    });



  }
};
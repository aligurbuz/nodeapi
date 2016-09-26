
var redis_port=6379;

//redis function
module.exports = {

  index: function (data,callback) {

    var redis = require("redis");
    var client = redis.createClient(redis_port, base.host());


    if(data.type=="get")
    {
      client.get(data.get, function (err, reply) {

        if(err)
        {
          callback(null);
        }
        else
        {
          callback(reply);
        }


      });

    }

    if(data.type=="set")
    {
      client.set(data.set.key,data.set.value,function (err,reply)
      {
        if(err)
        {
          callback(null);
        }
        else
        {
          callback(reply);
        }
      });


    }


    //usage
    //service.get("redis",callback,{type:'get',get:'foo'});
    //service.set("redis",callback,{type:'set',set:{key:'key',value:'value'});


  }
};

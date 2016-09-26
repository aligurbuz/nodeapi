
//redis function
module.exports = {

  index: function (data,callback) {

    var redis = require("redis");
    var client = redis.createClient(6379, base.host());


    if(data.type=="get")
    {
      client.get(data.get, function (err, reply) {

        if (err) throw(err);

        callback(reply);
      });

    }


    //usage
    //service.get("redis",callback,{type:'get',get:'foo'});


  }
};

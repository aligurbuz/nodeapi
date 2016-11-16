
var redis_port=6379;

//redis function
module.exports = {

  index: function (data,callback) {

    var redis = require("redis");
    var client = redis.createClient(redis_port, base.host());


    if(data.type=="get")
    {
      client.exists(data.get,function(err,reply){
        if(reply===1)
        {
          client.get(data.get, function (err, reply) {

            if(err)
            {
              callback(null);
            }
            else
            {
              if(data.content=="json")
              {
                callback(JSON.parse(reply));
              }
              else {
                callback(reply);
              }

            }


          });

        }
        else {
          callback("nokey");
        }
      })

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
          if(data['set'].hasOwnProperty("ttl"))
          {
            client.expire(data.set.key,data.set.ttl);
          }

          client.get(data.set.key,function(err,reply){
            if(err){
              callback(err);
            }
            else {

              if(data.content=="json")
              {
                callback(JSON.parse(reply));
              }else {
                callback(reply);
              }

            }
          })
        }
      });


    }


    //usage
    //service.get("redis",callback,{type:'get',get:'foo'});
    //service.set("redis",callback,{type:'set',set:{key:'key',value:'value'});


  }
};

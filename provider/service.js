
//redis function
module.exports = {
  output: function (callback) {
    callback();
  },
  redis: function (callback) {

    var redis = require("redis");
    var client = redis.createClient(6379, '192.168.33.10');

    client.get("foo", function (err, reply) {

      if (err) throw(err);

      callback(reply);
    });


  }
};

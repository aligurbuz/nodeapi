//base function
module.exports = {

  ip: function () {

    //get ip from request variable
    var ip=req.connection.remoteAddress;
    var ip=ip.replace("::ffff:","",ip);

    //return
    return ip;
  },
  example : function(callback)
  {
    return callback();
  }
};

//base function
const url=require("url");

module.exports = {

  ip: function () {

    //get ip from request variable
    var ip=req.connection.remoteAddress;
    var ip=ip.replace("::ffff:","",ip);

    //return
    return ip;
  },
  host : function()
  {
    //get host from request variable
    var host=req.headers.host;
    var host=host.replace(":"+config.port,"",host);

    //return
    return host;
  }
};

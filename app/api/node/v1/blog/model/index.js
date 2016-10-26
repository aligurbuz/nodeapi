
module.exports = {
  user: function (callback) {

    query.table("user").join({model:['task']}).get(function(result)
    {
      callback(result);
    })

  },

  create : function (callback) {

    var postdata ={

      firstName           :"yasin",
      lastName            :"gurbuz"
    };

    query.table("user").insert(postdata,function(result)
    {
      callback(result);
    });

  }
};
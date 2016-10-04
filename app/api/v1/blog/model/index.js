
module.exports = {
  user: function (callback) {

      service.model("user",function(model)
      {
        model.sync().then(function()
        {
          model.findAll({order:'id desc',limit:1}).then(function(user)
          {
            callback(user);
          })
        });

      });
  },

  create : function (callback)
  {
    service.model("user",function(model)
    {
      model.sync().then(function()
      {
        model.create(
          {
            firstName:req.body.firstName,
            lastName:req.body.lastName
          }
        ).then(function(result)
          {
            callback(result);
          }).
          catch(function(error)
          {
            callback({error:error.errors});
          });
      });

    });

  }
};
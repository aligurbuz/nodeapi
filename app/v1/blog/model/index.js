
module.exports = {
  index: function (callback) {

      service.model("user",function(model)
      {
        model.sync().then(function()
        {
          model.findAll().then(function(user)
          {
            callback(user);
          })
        });

      });
  }
};
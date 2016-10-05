
module.exports = {
  chat: function (callback) {

    service.model("chat",function(model)
    {
      model.sync().then(function()
      {
        model.findAll().then(function(chat)
        {
          callback(chat);
        })
      });

    });
  }
};
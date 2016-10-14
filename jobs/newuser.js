//blog function


module.exports = {

  index: function () {

    service.model("admin",function(model)
    {
      model.sync().then(function()
      {

        model.findAll({order:'id desc',limit:1}).then(function(user)
        {

          model.create(
            {
              username:user[0].id
            }
          ).then(function(result)
            {
              return "user create process done";
            }).
            catch(function(error)
            {
              return error.errors;
            });

        });



      });

    });
  }
};

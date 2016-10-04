//blog function


module.exports = {

  index: function () {

    service.model("user",function(model)
    {
      model.sync().then(function()
      {

        model.findAll({order:'id desc',limit:1}).then(function(user)
        {

          model.create(
            {
              firstName:user[0].id,
              lastName:"blod"
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

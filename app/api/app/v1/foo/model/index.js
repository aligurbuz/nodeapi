module.exports = {

  get : function (callback)
  {

    query.table("admin").limit(5).get(function(result)
    {
      callback(result);
    });

  }


};
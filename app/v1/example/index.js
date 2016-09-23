//example function
module.exports = {
  index: function (callback) {

    new Promise(function (resolve,reject)
    {
      //init data object
      var data=new object();

      //data
      data.test="test";

      //resolve data
      resolve(data);

    })
      .then(function(data)
      {
        callback(data);
      })

      .catch(function(error)
      {
        callback(error);
      });

  }
};

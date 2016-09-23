//example function
module.exports = {
  index: function (callback) {

    new Promise(function (resolve,reject)
    {
      //data here

      //resolve data
      resolve(data);

    })
      .then(function(data)
      {
        callback(data);
      });

  }
};

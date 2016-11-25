

//redis function
module.exports = {

  index: function (data,callback) {

    var request = require('request');

    request({
    url: data.url,
    method: data.method,
    json: JSON.stringify(data['data']),
    headers: data.headers
    }, function(error, response, body){
    if(error){
      callback(error);
    }
    else {
      callback(body);
    }
    });

  }
};

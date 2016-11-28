

//redis function
module.exports = {

  connection: function (data,callback) {

    var elasticsearch = require('elasticsearch');
    var client = new elasticsearch.Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });

    return client;


  },

  test: function (data,callback) {

    var client=this.connection();

    client.cluster.health({},function(err,resp,status) {
    if(err){
      callback(err)
    }
    else {
      callback(resp)
    }
  });

  },


  insert: function (data,callback) {

    var client=this.connection();

    client.cluster.health({},function(err,resp,status) {
    if(err){
      callback(err)
    }
    else {
      client.index({
        index: data.index,
        id: data.id,
        type: data.type,
        body: data.body
      },function(err,resp,status) {
        if(err){
          callback(err)
        }
        else {
          callback(resp)
        }
      });
      }
      });

  },


  search: function (data,callback) {

    var client=this.connection();

    client.cluster.health({},function(err,resp,status) {
    if(err){
      callback(err)
    }
    else {
      client.search({
        index: data.index,
        type: data.type,
        body: data.query
      },function (error, response,status) {
        if (error){
          callback(error)
        }
        else {
          callback(response)
        }
      });
      }
      });

  }



};

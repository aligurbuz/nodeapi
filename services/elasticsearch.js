

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
        body: data.query
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

          if(data.hasOwnProperty("result"))
          {
            if(data.result=="getList") {
              callback(response)
            }

            if(data.result=="getIds") {
              var hitscount=Object.keys(response['hits']['hits']).length;
              var idslist=[];
              for (var i=0; i<hitscount; i++) {
                idslist.push(response['hits']['hits'][i]['_id']);
              }

              callback({searchIds:idslist})
            }
          }
          else {
            callback(response)
          }



        }
      });
      }
      });

  }



};


/*var elasticsearch={
  name: 'elasticsearch',
  method:'search'
}

var search={
  index        : 'node',
  type         : 'teknasyon',
  result       : 'getList',
  query        : {

    query : {
      dis_max : {
        queries : [
          {match : {firstName :'nursel beşiktaş'}},
          {match :{country : 'nursel beşiktaş'}}
        ]
      }

    }

  }
}

service.get(elasticsearch,function(result){
  callback(result)
},search)*/

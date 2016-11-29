
/**
 * Function api method ; index
 * Examples:
 *
 *     // Accept: application/json
 *     promise then catch methoding
 *
 * @param {String|Array} types...
 * @return {json}
 * @public
 */
class query {

   constructor(){

     this.name                   =null;
     this.wh                     =null;
     this.lmt                    =null;
     this.slct                   =null;
     this.ofst                   =null;
     this.exc                    =null;
     this.order                  =null;
     this.grp                    =null;
     this.inc                    =null;
     this.incType                ="left";
     this.scp                    =null;
     this.transac                =null;
     this.rds                    =false;
   }


   scope(scp){
     this.scp=scp;
     return this;
   }

   redis(rds){
     this.rds=rds;
     return this;
   }

   table(name){
  this.name=name;
  return this;
}

select(slct){

  this.slct=slct;
  return this;

};

exclude(exc){

  this.exc=exc;
  return this;

};

where(wh){

  this.wh=wh;
  return this;

};

limit(lmt){

  this.lmt=lmt;
  return this;

};


offset(ofst){

  if(req['query'].hasOwnProperty("page"))
  {
    var offset=req['query']['page']-1;
    var limitation=offset*this.lmt;
    this.ofst=limitation;
  }
  else {
    this.ofst=ofst;
  }

  return this;

};


orderBy(order){

  this.order=order;
  return this;

};

group(grp){

  this.grp=grp;
  return this;

};

join(inc,type){

  this.inc=inc;
  this.incType=type;
  return this;

};


get(callback)
{
  //load tokens for all services
  var configtoken=require(""+appDir+"/config/token");


  var databaseConf=require(""+appDir+"/config/database");

  //get base token boolean
  var baseToken=base.token();

  var obj={};
  if(this.wh!==null)
  {
    obj.where=this.wh;
  }


  if(req['body'].hasOwnProperty("where")) {

    var configrest=configtoken.query_restrictions();

    if(baseToken['statu']) {
      if(configrest['token'].hasOwnProperty(baseToken['get']))
      {
        if(configrest['token'][baseToken['get']]['where'])
        {
          obj.where=req['body']['where'];
        }
      }
    }
    else {

      if(configrest['ip'].hasOwnProperty(base.ip()))
      {
        if(configrest['ip'][base.ip()]['where'])
        {
          obj.where=req['body']['where'];
        }
      }
      else {
        if(configrest['ip'].hasOwnProperty("none"))
        {
          if(configrest['ip']['none']['where'])
          {
            obj.where=req['body']['where'];
          }
        }
      }
    }
  }

  if(this.inc!==null)
  {
    if(this.incType=="left")
    {
      var jointype=false;
    }

    if(this.incType=="inner")
    {
      var jointype=true;
    }

    if(databaseConf.redis_cache && this.rds) {

      var redisForJoin={};
      redisForJoin.model=this['inc']['model'];
      redisForJoin.select=this['inc']['select'];
      redisForJoin.required=jointype;

    }

    obj.include=[{model:service.model(this['inc']['model']),attributes:this['inc']['select'],required:jointype}];


  }


  if(this.lmt!==null)
  {
    obj.limit=this.lmt;
  }

  if(this.lmt!==null)
  {
    if(req['query'].hasOwnProperty("page"))
    {
      var offset=req['query']['page']-1;
      var limitation=offset*this.lmt;
      obj.offset=limitation;
    }
    else {
      obj.offset=0;
    }

  }
  else {
    if(this.ofst!==null)
    {
      obj.offset=this.ofst;
    }
  }



  if(this.order!==null)
  {
    obj.order=this.order;
  }

  if(this.grp!==null)
  {
    obj.group=this.grp;
  }


  //select start
  ////////////////////////////////////////////////////////////////
  if(this.slct!==null)
  {
    obj.attributes=this.slct;
  }



  if(req['body'].hasOwnProperty("select")) {

    var configrest=configtoken.query_restrictions();

    if(baseToken['statu']) {
      if(configrest['token'].hasOwnProperty(baseToken['get']))
      {
        if(configrest['token'][baseToken['get']]['select'])
        {
          obj.attributes=req['body']['select'];
        }
      }
    }
    else {

      if(configrest['ip'].hasOwnProperty(base.ip()))
      {
        if(configrest['ip'][base.ip()]['select'])
        {
          obj.attributes=req['body']['select'];
        }
      }
      else {
        if(configrest['ip'].hasOwnProperty("none"))
        {
          if(configrest['ip']['none']['select'])
          {
            obj.attributes=req['body']['select'];
          }
        }
      }
    }
  }

  //select end
  ////////////////////////////////////////////////////////////////

  if(this.exc!==null)
  {
    obj.attributes={exclude : this.exc };
  }

  if(this.scp!==null)
  {
    var scp=this.scp;
  }



  if(databaseConf.redis_cache && this.rds)
  {

    var md5=require("md5");

    if(this.inc!==null){

      var exceptInclude=base.exceptObjectKey(obj,['include']);
      var redisForJoinMerge=base.merge(exceptInclude,redisForJoin);

      var objmd5=md5(JSON.stringify(redisForJoinMerge));
    }
    else {
      var objmd5=md5(JSON.stringify(obj));
    }

    var redisObj={};
    var tname=this.name;

    var redis_cache='query_'+tname+'_'+objmd5;




    service.get("redis",function(redisresult){
      if(redisresult=="nokey")
      {
        if(tname!==null)
        {
          service.model(tname,function(model,seq)
          {
            model.sync().then(function()
            {
              model.scope(scp).findAll(obj).then(function(admin)
              {

                service.get("redis",function(setres){

                  var dquery={};
                  dquery.offset=obj.offset;
                  dquery.limit=obj.limit;
                  dquery.data=setres;


                  callback({query:dquery});

                },{type:'set',content:'json',set:{key:redis_cache,value:JSON.stringify(admin),ttl:databaseConf.redis_cache_expire}})


              })
                .catch(function(error)
                {
                  callback(error);
                })
            });

          });
        }
        else
        {
          callback("no table");
        }
      }
      else {

        var dquery={};
        dquery.offset=obj.offset;
        dquery.limit=obj.limit;
        dquery.data=redisresult;

        callback({query:dquery});
      }
    },{type:'get',get:redis_cache,content:'json'});
  }
  else {


    if(this.name!==null)
    {
      service.model(this.name,function(model,seq)
      {
        model.sync().then(function()
        {
          model.scope(scp).findAll(obj).then(function(admin)
          {
            var dquery={};
            dquery.offset=obj.offset;
            dquery.limit=obj.limit;
            dquery.data=admin;


            callback({query:dquery});
          })
            .catch(function(error)
            {
              callback(error);
            })
        });

      });
    }
    else
    {
      callback("no table");
    }

  }









};



insert(post,callback){

  service.model(this.name,function(model)
  {
    model.sync().then(function()
    {
      model.create(

        post
      ).then(function(result)
        {
          callback(result);
        }).
        catch(function(error)
        {
          callback({error:error.errors});
        });
    });

  });
};



update(post,callback){

  var whereupdate=this.wh;
  service.model(this.name,function(model)
  {
    model.sync().then(function()
    {
      model.update(

        post,
        {where :whereupdate}

      ).then(function(result)
        {
          callback(result);
        }).
        catch(function(error)
        {
          callback({error:error.errors});
        });
    });

  });
};








delete(callback)
{
  var obj={};
  if(this.wh!==null)
  {
    obj.where=this.wh;
  }

  if(this.lmt!==null)
  {
    obj.limit=this.lmt;
  }

  if(this.ofst!==null)
  {
    obj.offset=this.ofst;
  }

  if(this.slct!==null)
  {
    obj.attributes=this.slct;
  }

  if(this.exc!==null)
  {
    obj.attributes={exclude : this.exc };
  }

  if(this.name!==null)
  {
    service.model(this.name,function(model,seq)
    {
      model.sync().then(function()
      {
        model.destroy(obj).then(function(admin)
        {
          callback(admin);
        })
          .catch(function(error)
          {
            callback(error);
          })
      });

    });
  }
  else
  {
    callback("no table");
  }


};


transaction (query,callback)
{
  //configuration database
  var database=require(""+appDir+"/config/database");

  //sequelize modul
  var Sequelize=require("sequelize");

  //set connection
  var connection = new Sequelize(database.database,database.user,database.password, {
    host: database.host,
    dialect: database.dialect,

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

      var Promise=require("promise");

          connection.transaction({
            autocommit : true,
        isolationLevel: connection.Transaction.ISOLATION_LEVELS.SERIALIZABLE
      }, function (t) {

          var queries=[];

          for (var i=0; i<Object.keys(query).length; i++)
          {
            if(query[i]['process']=="create")
            {
              queries.push(service.model(query[i]['model']).create(query[i]['postdata'], { transaction: t }))
            }

          }

          return Promise.all(queries).then(function(result){
           callback({poststatu : true});
         }).catch(function(err){
           callback({poststatu : false,rollback : t.rollback(),error:err.errors});
         });

        });


        //using
        /*var data = [
          {
            postdata : { },
            model : 'modelname',
            process : 'create|update|delete'
          }
        ];

        query.transaction(data,function(result){
          callback(result)
        })*/

};




}

//module exports class object
module.exports=query;

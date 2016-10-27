
var query=function () {

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
};

query.prototype.scope=function(scp){
  this.scp=scp;
  return this;
};

query.prototype.table=function(name){
  this.name=name;
  return this;
};

query.prototype.select=function(slct){

  this.slct=slct;
  return this;

};

query.prototype.exclude=function(exc){

  this.exc=exc;
  return this;

};

query.prototype.where=function(wh){

  this.wh=wh;
  return this;

};

query.prototype.limit=function(lmt){

  this.lmt=lmt;
  return this;

};


query.prototype.offset=function(ofst){

  this.ofst=ofst;
  return this;

};


query.prototype.orderBy=function(order){

  this.order=order;
  return this;

};

query.prototype.group=function(grp){

  this.grp=grp;
  return this;

};

query.prototype.join=function(inc,type){

  this.inc=inc;
  this.incType=type;
  return this;

};


query.prototype.get=function(callback)
{
  var obj={};
  if(this.wh!==null)
  {
    obj.where=this.wh;
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

    obj.include=[{model:service.model(this['inc']['model']),attributes:this['inc']['select'],required:jointype}];
  }

  if(this.lmt!==null)
  {
    obj.limit=this.lmt;
  }

  if(this.ofst!==null)
  {
    obj.offset=this.ofst;
  }

  if(this.order!==null)
  {
    obj.order=this.order;
  }

  if(this.grp!==null)
  {
    obj.group=this.grp;
  }

  if(this.slct!==null)
  {
    obj.attributes=this.slct;
  }

  if(this.exc!==null)
  {
    obj.attributes={exclude : this.exc };
  }

  if(this.scp!==null)
  {
    var scp=this.scp;
  }


  if(this.name!==null)
  {
    service.model(this.name,function(model,seq)
    {
      model.sync().then(function()
      {
        model.scope(scp).findAll(obj).then(function(admin)
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



query.prototype.insert=function(post,callback){

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








query.prototype.delete=function(callback)
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

module.exports=new query();


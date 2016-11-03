
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
   }


   scope(scp){
     this.scp=scp;
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

  this.ofst=ofst;
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



}

//module exports class object
module.exports=query;

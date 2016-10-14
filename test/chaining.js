
var query=function () {

  this.name                   ="aligurbuz";
};

query.prototype.table=function(name){
  this.name=name;
  return this;
};


query.prototype.get=function(callback)
{
  var val={
    name : this.name
  };

  callback(val);

};

module.exports=new query();


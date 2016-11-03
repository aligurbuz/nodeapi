
var source=function () {

  this.sourcename                   =null;
  this.sourcemethod                 ='index';
};

source.prototype.name=function(sourcename){
  this.sourcename=sourcename;
  return this;
};

source.prototype.method=function(sourcemethod){
  this.sourcemethod=sourcemethod;
  return this;
};

source.prototype.get=function(callback,sourcedata){

  if(this.sourcename!==null)
  {
    var namespace=base.namespace();
    var getSource=require(""+appDir+"/"+namespace.directory+"/source/"+namespace.index+"/"+this.sourcename+"");

    getSource[this.sourcemethod](function(result)
    {
      callback(result);
    },sourcedata)
  }


};


module.exports=new source();

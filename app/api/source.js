
var source=function () {

  this.sourcename                   =null;
  this.sourcemethod                 =null;
  this.appsrc                       ='null';
  this.appservice                   =null;
  this.appfile                      =null;
};

source.prototype.src=function(appsrc){

  this.appsrc=appsrc;
  return this;
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

  if(this.sourcename!==null && this.sourcemethod!==null && this.appsrc!==null)
  {
    var namespace=base.namespace();

    var getSource=require(""+appDir+"/"+namespace.directory+"/"+this.appsrc+"/"+namespace.index+"/"+this.sourcename+"");




    if(this.sourcemethod!==null)
    {
      getSource[this.sourcemethod](function(result)
      {
        callback(result);
      },sourcedata)
    }


  }


};

source.prototype.service=function(appservice){

  this.appservice=appservice;
  return this;
};



source.prototype.file=function(appfile){

  this.appfile=appfile;
  return this;
};


source.prototype.mobile=function(callback,sourcedata){

  if(this.appservice!==null && this.appsrc!==null && this.sourcename!==null && this.sourcemethod!==null)
  {
    var namespace=base.namespace();
    var getSource=require(""+appDir+"/app/api/"+namespace.project+"/v"+namespace.version+"/"+this.appservice+"/"+this.appsrc+"/"+this.sourcename+"/"+this.appfile);

    getSource[this.sourcemethod](function(result)
    {
      callback(result);
    },sourcedata)
  }


};


module.exports=new source();

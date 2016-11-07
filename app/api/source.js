
var source=function () {

  this.sourcename                   ='index';
  this.sourcemethod                 ='index';
  this.appsrc                       ='source';
  this.appservice                   =null;
  this.appfile                      =null;
  this.appdir                       =null;
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


source.prototype.service=function(appservice){

  this.appservice=appservice;
  return this;
};

source.prototype.dir=function(appdir){

  this.appdir=appdir;
  return this;
};

source.prototype.get=function(callback,sourcedata){

  if(this.sourcename!==null)
  {
    var namespace=base.namespace();

    if(this.appservice==null)
    {
      var directory=namespace.directory;
    }
    else {
      var directory=''+namespace.versionPath+'/'+this.appservice;
    }

    if(this.appdir==null)
    {
      var adir=namespace.index;
    }
    else {
      var adir=this.appdir;
    }

    var getSource=require(""+appDir+"/"+directory+"/"+this.appsrc+"/"+adir+"/"+this.sourcename+"");

    getSource[this.sourcemethod](function(result)
    {
      callback(result);
    },sourcedata)


  }


};



source.prototype.file=function(appfile){

  this.appfile=appfile;
  return this;
};


source.prototype.mobile=function(callback,sourcedata){

  if(this.sourcename!==null)
  {
    var namespace=base.namespace();
    var getSource=require(""+appDir+"/app/api/"+namespace.project+"/v"+namespace.version+"/"+this.appservice+"/"+this.appsrc+"/"+this.sourcename+"/"+this.appfile);

    getSource[this.sourcemethod](function(result)
    {
      callback(result);
    },sourcedata)
  }


};


module.exports=source;

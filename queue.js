// create a queue object with concurrency 2
var async=require("async");
var queueconf=require("./config/queue");


// create a queue object with concurrency 2
var q = async.queue(function(task, callback) {


    setInterval(function()
    {
      for (var a=1; a<=queueconf.limit; a++)
      {
        console.log('Job : ' + task['qd'+a]+'..done');
      }

    },2000);



});

// assign a callback
q.drain = function() {
  console.log('all items have been processed');
};


var queuedata={};

for (var i=1; i<=queueconf.limit; i++)
{

  var filename=queueconf['jobs']['queue'+i]['name'];

  var qfile='qf_'+i;

  var qfile=require("./jobs/"+filename);

  queuedata['qd'+i]=qfile.index();


}

// add some items to the queue
q.push(queuedata, function(err) {
  console.log('finished processing foo');
});



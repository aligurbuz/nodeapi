// create a queue object with concurrency 2
var async=require("async");
// create a queue object with concurrency 2
var q = async.queue(function(task, callback) {

  setInterval(function()
  {
    console.log('hello ' + task.queue);
  },2000);

});

// assign a callback
q.drain = function() {
  console.log('all items have been processed');
};

// add some items to the queue
q.push({queue:foo()}, function(err) {
  console.log('finished processing foo');
});

function foo()
{
  return 'fooarr';
}

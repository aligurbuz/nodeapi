// create a queue object with concurrency 2
var async=require("async");

/**
 * get path for config queue.
 *
 * @param {object} req
 * @public
 */
var queueconf=require("./config/queue");

/**
 * get path for main directory.
 *
 * @param {object} req
 * @public
 */
global.path = require('path');
global.appDir = path.dirname(require.main.filename);


/**
 * Get config for app settings.
 *
 * @param {object} req
 * @public config.js
 */
global.config = require("./config/config");


/**
 * Get base provider for app.
 *
 * @param {object} req
 * @public config.js
 */
global.base = require("./provider/base");

/**
 * Get service provider for app.
 *
 * @param {object} req
 * @public config.js
 */
global.service = require("./provider/service");


// create a queue object with concurrency 2
var q = async.queue(function(task, callback) {
  callback();
});

// assign a callback
q.drain = function() {
  console.log('all items have been processed');
};


var queuedata={};

var objectcount=Object.keys(queueconf['jobs']).length;

for (var i = 1, len =objectcount; i <= len; i += 1) {
  (function(i) {
    setInterval(function() {
      var filename=queueconf['jobs']['queue'+i]['name'];

      var queuefile='qf_'+i;

      var queuevar=queuefile;

      var queuefile=require("./jobs/"+filename);

      // add some items to the queue
      q.push({i: queuefile.index()}, function(err) {
        console.log('finished processing queue'+i);
      });

    }, queueconf['jobs']['queue'+i]['time'])
  })(i);
}

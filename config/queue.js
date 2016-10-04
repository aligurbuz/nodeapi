/**
 * get queue arrays
 *
 * @param {object} req
 * @public queue.js
 */

var queue = module.exports = {

  jobs : {

    queue1 : {

      status        : true,
      name          : 'newuser',
      time          : 2000,
      datetime      : false, //yy.mm.dd
      type          : 'second',
      forever       : true

    }

    ,

    queue2 : {

      status        : true,
      name          : 'test',
      time          : 10000,
      datetime      : false, //yy.mm.dd
      type          : 'second',
      forever       : true

    }
  }

};
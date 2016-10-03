/**
 * get queue arrays
 *
 * @param {object} req
 * @public queue.js
 */

var queue = module.exports = {

  limit : 2,

  jobs : {

    queue1 : {

      name          : 'newuser',
      time          : 2000,
      datetime      : false, //yy.mm.dd
      type          : 'second',
      forever       : true

    }

    ,

    queue2 : {

      name          : 'test',
      time          : 2000,
      datetime      : false, //yy.mm.dd
      type          : 'second',
      forever       : true

    }
  }

};
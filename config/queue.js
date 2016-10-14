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
      time          : 1000,
      datetime      : false, //yy.mm.dd
      type          : 'second',
      forever       : true

    }
  }

};
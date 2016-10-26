
module.exports = {

  /**
   * get user method for blog model.
   *
   * @param {object} req
   * @database user data
   */
  user: function (callback) {

    //query builder for sequelize --select model
    //select() or where() orderby() offset() groupBy()
    query.table("user").join({model:['task']}).get(function(result) {
      callback(result);
    })

  },

  /**
   * get user 'create' method for blog model.
   *
   * @param {object} req
   * @database user data create
   */
  create : function (callback) {

    //postdata
    var postdata ={
      firstName           :"yasin",
      lastName            :"gurbuz"
    };

    //query builder for sequelize --insert model
    query.table("user").insert(postdata,function(result) {
      callback(result);
    });

  }
};
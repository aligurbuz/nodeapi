
module.exports = {

  /**
   * get user method for blog model.
   *
   * @param {object} req
   * @database user data
   */
  user: function (callback) {

    //query builder for sequelize --select model
    //select(['id','username']) or where({id:1}) orderby({id:desc}) offset(page,limit) groupBy()
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
      firstName           :"spartan",
      lastName            :"troyya"
    };

    //query builder for sequelize --insert model
    query.table("user").insert(postdata,function(result) {
      callback(result);
    });

  }
};
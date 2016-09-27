//in array module
var in_array = require('in_array');

//userlist
var userlist=[
  'testuser'
];

// exports function
module.exports =
{

  get: function (req)
  {
    //get token
    var token=req.query._token;

    //token control
    if(in_array(token,userlist))
    {
      //true
      return true;
    }

    //false
    return false;
  }
};

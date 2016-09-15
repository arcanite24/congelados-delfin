/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 
var bcrypt = require("bcrypt");

module.exports = {

  attributes: {
  
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    
    name: {
      type: 'string',
      required: true
    },
    
    password: {
      type: 'string',
      required: true
    },
    
    role: {
      type: 'array'
    },
    
    /*
      ROLES
        ROLE_ADMIN
        ROLE_STORAGE_DUDE
        ROLE_BOSS
    */
    
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  
  },
  
  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }
  
};


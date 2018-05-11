var express = require("express");
var mongoose = require("mongoose");
var Info = require("./models/user");

let myDatabase = function() {
}

//add or modify.  Complete getAllObjects function.
myDatabase.prototype.getAllObjects = function(res) {

User.find({},function(error,user) {
	if (error) {
    console.log('uer error');
		return res.json(null);
	} else {
    console.log('in users');
		let objs = [];
		for (let i=0;i<user.length;i++) {
      console.log(user[i].name);
		  objs.push({name:user[i].name,friends:user[i].friends});
		}
		return res.json(objs);
	}
});

}

myDatabase.prototype.getObjectWithID = function(_ident,res) {
  User.find({ident:_ident},function(error,user) {
      if (error) {
          return res.json(null);
      }
      else if (info == null) {
          return res.json(null);
      }

      if (user.length == 1)
      {     	
        return res.json({ name: info[0].name });
      }
      else
      {
          return res.json(null);
      }
   });

}

myDatabase.prototype.addObject = function(obj,res) {

    User.create(obj,function(error,user) {
        if (error) {
            return res.json(null);
        }
	  let obj2 = {ident:obj.ident,name:obj.name};
        return res.json(obj2);
    });
}


//add or modify.  Complete changeObject function.
myDatabase.prototype.changeObject = function(obj,res) {
User.findOneAndUpdate({ident:obj.ident},{name:obj.name},function(error,user) {
          if (error) {
              return res.json(null);
          }
          else if (user == null) {
              return res.json(null);
          }
          return res.json(obj);
      });
}


//add or modify.  Complete deleteObjectWithID function.
myDatabase.prototype.deleteObjectWithID = function(_ident,res) {
    User.remove({ident:_ident},function(error,removed) {
        if (error) {
            return res.json(null);
        }
        return res.json(removed.result);
    });
}


module.exports = myDatabase;


var express = require("express");
var mongoose = require("mongoose");
var Info = require("./models/Info");

let myDatabase = function() {
}

//add or modify.  Complete getAllObjects function.
myDatabase.prototype.getAllObjects = function(name,res) {

Info.find({},function(error,info) {
	if (error) {
		return res.json(null);
	} else {
		let objs = [];
		for (let i=0;i<info.length;i++) {
      if(info[i].sessionName == name)
		    objs.push({teamName:info[i].teamName,sessionName:info[i].sessionName});
		}
		return res.json(objs);
	}
});

}

myDatabase.prototype.getObjectWithID = function(_ident,res) {
  Info.find({ident:_ident},function(error,info) {
      if (error) {
          return res.json(null);
      }
      else if (info == null) {
          return res.json(null);
      }

      if (info.length == 1)
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

    Info.create(obj,function(error,info) {
        if (error) {
            return res.json(null);
        }
	  let obj2 = {teamName:obj.teamName,sessionName:obj.sessionName};
        return res.json(obj2);
    });
}


//add or modify.  Complete changeObject function.
myDatabase.prototype.changeObject = function(obj,res) {
Info.findOneAndUpdate({ident:obj.ident},{name:obj.name},function(error,info) {
          if (error) {
              return res.json(null);
          }
          else if (info == null) {
              return res.json(null);
          }
          return res.json(obj);
      });
}


//add or modify.  Complete deleteObjectWithID function.
myDatabase.prototype.deleteObjectWithID = function(_ident,res) {
    Info.remove({ident:_ident},function(error,removed) {
        if (error) {
            return res.json(null);
        }
        return res.json(removed.result);
    });
}


module.exports = myDatabase;
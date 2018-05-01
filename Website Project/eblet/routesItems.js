var express = require("express");
var router = express.Router();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

const dataBase = require('./databaseItem'); 

let db = new dataBase();

router.get("/items",function(req,res){
	    res.sendFile(__dirname + "/public/views/items.html");
});
router.get("/",function(req,res){
	    res.sendFile(__dirname + "/public/views/newItem.html");
});
 

router.post('/item',function (req, res) {
	var parsedBoi = path.parse(req.body.picture);

	var newPath = './public/images/' + parsedBoi.base;
	console.log(parsedBoi);
	console.log(newPath);

	console.log(req.body);
	var obj = {name:req.body.name,picture:req.body.picture,
	price:req.body.price,category:req.body.category,description:req.body.description};
		res.json(db.addObject(obj));
});
module.exports = router;

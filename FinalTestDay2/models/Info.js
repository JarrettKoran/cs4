

var mongoose = require("mongoose");

//Schema is a decription (the definition) of the mongoDB document.
var teamSchema = mongoose.Schema({
	teamName: String,
	sessionName:String
});

var Team = mongoose.model("TeamName", teamSchema);



module.exports = Team;




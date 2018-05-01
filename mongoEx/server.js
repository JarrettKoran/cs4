// mongoose is what will let us connect to our database
var mongoose = require('mongoose')
// our Student Object, check out Student.js
var Student = require('./Student')

// Use mongoose to connect to our database
mongoose.connect('mongodb://localhost/StudentDB')


var aaroh = Student.create({
  name: 'Aaroh',
  gradeLevel: 12,
})

Student.findOne({ident:'1523'},function(err,info){
	console.log(err)
	console.log(info.name)
	console.log(info.gradeLevel)
})
// Student.findOneAndUpdate({ident:'1523'},{name:'KIKI',gradeLevel:9},function(err,info){
// 	console.log(err)
// 	console.log(info.name)
// 	console.log(info.gradeLevel)
// })

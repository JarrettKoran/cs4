  var mongoose = require('mongoose')
 
  var Student = mongoose.model('Student', {
    ident: String,
    name: String,
    gradeLevel: Number,
  })

   var studentSchema = mongoose.Schema({
    ident:{
      required:true,
      unique:true,
      type:String
    },
      name:String,
      gradeLevel:Number
   })

  module.exports = Student

const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name : {type: String},
  email : {type: String},
  studentId : {type: String},
  batch : {type: mongoose.Schema.Types.ObjectId, ref: 'batch'},
  DSA_Course : {type: mongoose.Schema.Types.ObjectId, ref: 'DSA_Course'},
  coding_course : {type: mongoose.Schema.Types.ObjectId, ref : 'coding_course'}, 
  unit : {type: mongoose.Schema.Types.ObjectId, ref : 'unit'},
},
{
  versionKey : false,
  timestamps : true,
});

const User = mongoose.model("user", studentSchema);

module.exports = User;

const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const studentSchema = mongoose.Schema({
  name : {type: String},
  email : {type: String},
  studentId : {type: String},
  batch : {type: mongoose.Schema.Types.ObjectId, ref: 'batch'},
  DSA_Course : {type: mongoose.Schema.Types.ObjectId, ref: 'DSA_Course'},
  coding_course : {type: mongoose.Schema.Types.ObjectId, ref : 'coding_course'}, 
  unit : {type: mongoose.Schema.Types.ObjectId, ref : 'unit'},
  password : {type: String, required: true}
},
{
  versionKey : false,
  timestamps : true,
});

studentSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
     next();
  }
  const salt = await bcrypt.genSaltSync(8);
  const hash = await bcrypt.hashSync(this.password, salt);
  this.password = hash
  next();
})

studentSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compareSync(password, this.password);
}


const User = mongoose.model("User", studentSchema);

module.exports = User;

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema(
    {
        name : {type: String},
        designation : {type: String},
        email : {type: String, required: true},
        zoom_link : {type: String},
        role : {type: String, enum : ['Admin', 'SuperAdmin'], default: 'Admin'},
        password : {type: String, required: true}
    },
    {
        timestamps : true,
        versionKey : false
    }
)


adminSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSaltSync(8);
  const hash = await bcrypt.hashSync(this.password, salt);
  this.password = hash
  next();
})

adminSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compareSync(password, this.password);
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

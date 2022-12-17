const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
    {
        name : {type: String},
        designation : {type: String},
        email : {type: String, required: true},
        zoom_link : {type: String},
        role : {type: String, enum : ['Admin', 'SuperAdmin'], default: 'Admin'}
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

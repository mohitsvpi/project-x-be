const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        name : {type: String, required: true},
        type: {type: String, enum : ['DSA', 'Coding']},
        IA : [{type : mongoose.Schema.Types.ObjectId, ref: 'IA'}],
        EC : {type : mongoose.Schema.Types.ObjectId, ref: 'Admin'},
        instructors : {type : mongoose.Schema.Types.ObjectId, ref: 'Admin'},
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

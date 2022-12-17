const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema(
    {
        name : {type: Number, required: true},
        type: {type: String}, // It may be Java, DA, or something
        IA : [{type : mongoose.Schema.Types.ObjectId, ref: 'IA'}],
        EC : {type : mongoose.Schema.Types.ObjectId, ref: 'Admin'},
        instructors : {type : mongoose.Schema.Types.ObjectId, ref: 'Admin'},
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema(
    {
        name : {type: String, required: true},
        type : {type: String}
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
const mongoose = require('mongoose');

const iaSchema = new mongoose.Schema(
    {
        name : {type: String},
        email : {type: String, required: true},
        pair_programming : {
            Monday : {
                start_time : [{type: String}],
                end_time : [{type: String}]
            },
            Tuesday : {
                start_time : [{type: String}],
                end_time : [{type: String}]
            },
            Wednesday : {
                start_time : [{type: String}],
                end_time : [{type: String}]
            },
            Thursday : {
                start_time : [{type: String}],
                end_time : [{type: String}]
            },
            Friday : {
                start_time : [{type: String}],
                end_time : [{type: String}]
            },
            Saturday : {
                start_time : [{type: String}],
                end_time : [{type: String}]
            }
        },
        zoom_link : {type: String},
        pp_visibility : {type: Boolean, default : false}
    },
    {
        timestamps : true,
        versionKey : false
    }
)


const IA = mongoose.model('IA', iaSchema);

module.exports = IA;
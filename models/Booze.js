const
    mongoose = require('mongoose'),
    boozeSchema = new mongoose.Schema({
        name: {type: String, required: true},
        type: {type: String, default: "Uncategorized"},
        proof: {type: Number}
    }, {timestamps: true})

module.exports = mongoose.model('Booze', boozeSchema)
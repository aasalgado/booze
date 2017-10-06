const   
    Booze = require('../models/Booze.js')

module.exports = {
    index: (req, res) => {
        Booze.find({}, (err, boozy) => {
            if(err) return console.log(err)
            res.json(boozy)
        })
    },

    create: (req, res) => {
        var newBooze = new Booze(req.body)
        newBooze.save((err, booze) => {
            if(err) return console.log(err)
            res.json({success: true, message: "Booze created.", booze: booze})
        })
    },

    show: (req, res) => {
        Booze.findById(req.params.id, (err, booze) => {
            res.json(booze)
        })
    },

    destroy: (req, res) => {
        Booze.findByIdAndRemove(req.params.id, (err) => {
            if(err) return console.log(err)
            res.json({success: true, message: "Booze deleted 😢"})
        })
    }
}
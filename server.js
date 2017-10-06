const
    express = require('express'),
    app = express(),
    logger = require('morgan'), 
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = 3000
    // boozyRoutes = require('./routes/boozy.js')

mongoose.connect('mongodb://localhost/booze', (err) => {
        console.log(err || 'Connected to MongoDB')
    })

app.use(logger('dev'))
app.use(bodyParser.json())
    
app.get('/', (req, res) => {
    res.json({message: "The root. Is drunk 🌮"}) 
})

//app.use('/boozy', boozyRoutes)

app.listen(port, (err) => {
    console.log(err || `Server running on ${port}`)
})
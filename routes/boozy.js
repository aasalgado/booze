const
    express = require('express'),
    boozyRouter = new express.Router()
    boozyCtrl = require('../controllers/boozy.js')
;

boozyRouter.get('/', boozyControl.index)

boozyRouter.post('/', boozyControl.create)

boozyRouter.get('/:id', boozyControl.show)

boozyRouter.patch('/:id', boozyControl.update)

boozyRouter.delete('/:id', boozyControl.destroy)

module.exports = boozyRouter
const
    express = require('express'),
    boozyRouter = new express.Router()
    boozyCtrl = require('../controller/boozy.js')
;

boozyRouter.get('/', videosControl.index)

boozyRouter.post('/', videosControl.create)

boozyRouter.get('/:id', videosControl.show)

boozyRouter.patch('/:id', videosControl.update)

boozyRouter.delete('/:id', videosControl.destroy)

module.exports = boozyRouter
const express = require('express');

const router = express.Router();

const validate = require('../../app/Http/Middleware/validate.js')

const System = require('../../app/Http/Controllers/API/SystemController.js');

const SystemRequest = require('../../app/Http/Requests/System/SystemRequest.js');

const SystemController = new System()


router.get('/',SystemController.index);

router.post('/', validate(SystemRequest), SystemController.store);

router.get('/:id',SystemController.show);

router.put('/:id', validate(SystemRequest),SystemController.update);

router.delete('/:id',SystemController.destroy);


module.exports = router;
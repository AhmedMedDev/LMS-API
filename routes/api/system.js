const express = require('express');

const router = express.Router();

const validate = require('../../app/Http/Middleware/validate.js')


const System = require('../../app/Http/Controllers/API/SystemController.js')

const SystemController = new System()


router.get('/',SystemController.index);

// router.post('/', validate(StoreRquest), SystemController.store);

// router.get('/:id',SystemController.show);

// router.put('/:id', validate(UpdateRquest),SystemController.update);

// router.delete('/:id',SystemController.destroy);


module.exports = router;
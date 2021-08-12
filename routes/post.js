const express = require('express');

const router = express.Router();

const validate = require('../app/Http/Middleware/validate.js')

const StoreRquest = require('../app/Http/Requests/StorePostRquest.js')

const UpdateRquest = require('../app/Http/Requests/UpdatePostRquest.js')

const Post = require('../app/Http/Controllers/API/PostController.js')

const PostController = new Post()


router.get('/',PostController.index);

router.post('/', validate(StoreRquest), PostController.store);

router.get('/:id',PostController.show);

router.put('/:id', validate(UpdateRquest),PostController.update);

router.delete('/:id',PostController.destroy);



module.exports = router;
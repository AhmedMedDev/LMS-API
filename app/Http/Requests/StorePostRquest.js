
const { body, validationResult } = require('express-validator');


let roles = [
    body('name')
    .isLength({ min: 5 }).withMessage('must be at least 5 chars long')
]

module.exports = roles
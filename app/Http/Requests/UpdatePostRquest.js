
const { body, validationResult } = require('express-validator');


let roles = [
    body('name')
    .isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    body('created_at')
    .notEmpty().withMessage('must be not empty'),
    body('updated_at')
    .notEmpty().withMessage('must be not empty'),

]

module.exports = roles
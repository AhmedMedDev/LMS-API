const express = require('express');
const router = express.Router();
const validate = require('../../app/Http/Middleware/validate.js')

const AuthController = require('../../app/Http/Controllers/Auth/AuthController.js');
const LoginController = require('../../app/Http/Controllers/Auth/LoginController.js');
const RegisterController = require('../../app/Http/Controllers/Auth/RegisterController.js');
const authenticateToken = require('../../app/Http/Middleware/authenticateToken.js');
const VerificationController = require('../../app/Http/Controllers/Auth/VerificationController.js');


router.post('/register', RegisterController.register)

router.post('/login', LoginController.login)

router.get('/refresh', authenticateToken.handle, AuthController.refresh)

router.get('/me', authenticateToken.handle, AuthController.me)

router.get('/emailVerification/:verification_code', VerificationController.emailVerification)

module.exports = router;
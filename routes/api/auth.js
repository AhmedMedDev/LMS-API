const express = require('express');
const router = express.Router();
const validate = require('../../app/Http/Middleware/validate.js')

const LoginController = require('../../app/Http/Controllers/Auth/LoginController.js');
const RegisterController = require('../../app/Http/Controllers/Auth/RegisterController.js');
const authenticateToken = require('../../app/Http/Middleware/authenticateToken.js');
const VerificationController = require('../../app/Http/Controllers/Auth/VerificationController.js');
const ResetPassController = require('../../app/Http/Controllers/Auth/ResetPassController.js');
const RefreshController = require('../../app/Http/Controllers/Auth/RefreshController.js');
const MeController = require('../../app/Http/Controllers/Auth/MeController.js');


router.post('/register', RegisterController.register)

router.post('/login', LoginController.login)

router.get('/refresh', authenticateToken.handle, RefreshController.refresh)

router.get('/me', authenticateToken.handle, MeController.me)

router.get('/emailVerification/:verification_code', VerificationController.emailVerification)

router.post('/preResetPassword', ResetPassController.preResetPassword)

router.post('/confirmPincode', ResetPassController.confirmPincode)

router.post('/resetPassword', ResetPassController.resetPassword)


module.exports = router;
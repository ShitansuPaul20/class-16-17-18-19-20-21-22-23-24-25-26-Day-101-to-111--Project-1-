const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/auth.controller')
const identifyUser = require('../middlewire/auth.middlewire')

authRouter.post('/register', authController.registerController)

authRouter.post('/login' , authController.loginController)

authRouter.post('/privacy', identifyUser, authController.privacyController)

authRouter.get('/get-me', identifyUser, authController.getMeController)


module.exports = authRouter
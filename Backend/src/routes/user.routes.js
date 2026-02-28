const express = require('express')
const userRoutes = express.Router()
const userController = require('../controllers/user.controller')
const identifyUser = require('../middlewire/auth.middlewire')


userRoutes.post("/follow/:username", identifyUser, userController.followUserController)
userRoutes.post("/unfollow/:username", identifyUser, userController.unfollowUserController)
userRoutes.post("/accept/:requestedUser" ,identifyUser, userController.acceptFollower)
userRoutes.post("/reject/:requestedUser" ,identifyUser, userController.rejectFollower)


module.exports = userRoutes
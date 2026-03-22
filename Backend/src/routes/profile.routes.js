const express = require('express');
const profileRouter = express.Router();
const identifyUser = require('../middlewire/auth.middlewire');
const profileController = require('../controllers/profile.controller');

// API setup
profileRouter.get('/profile/:userId', identifyUser, profileController.fetchUserProfile);

module.exports = profileRouter;
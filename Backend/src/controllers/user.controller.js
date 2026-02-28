const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')
const followRequestModel = require('../models/followRequest.model')

async function followUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isfolloweeExist = await userModel.findOne({username:followeeUsername})

    const isPrivate = isfolloweeExist.isPrivate

    if(!isfolloweeExist){
        return res.status(400).json({
            message: "User doesn't exist"
        })
    }

    if(followeeUsername === followerUsername){
        return res.status(400).json({
            message: "You can't follow yourself"
        })
    }

    const isAlreadyFollwing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if(isAlreadyFollwing){
        return res.status(200).json({
            message: `You are already following ${followeeUsername}`,
            follow: isAlreadyFollwing
        })
    }

    if(!isPrivate){

        const followerRecord = await followModel.create({
        followee: followeeUsername , follower: followerUsername , 
        })

        return res.status(201).json({
            message:`You are now following ${followeeUsername}`,
            follow: followerRecord
        })
    }

    else{
        const followRequest = await followRequestModel.create({
            requestedFollower: followerUsername , requestedFollowee: followeeUsername
        })

        return res.status(202).json({
            message: "You request is sent to user",
            request: followRequest
        })
    }

}

async function unfollowUserController(req,res){
    
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower : followerUsername,
        followee : followeeUsername
    })

    if(!isUserFollowing){
        return res.status(400).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}

async function acceptFollower(req,res) {
    
    const requestedUser = req.user.username
    const userRequesting = req.params.requestedUser

    const isUserExist = await userModel.findOne({username:userRequesting})

    if(!isUserExist){
        return res.status(400).json({
            message:"User doesn't Exist"
        })
    }

    if(userRequesting === requestedUser){
        return res.status(403).json({
            message:"Access denied"
        })
    }

    const follower = await followModel.create({
        follower:userRequesting , followee:requestedUser
    })

    await followRequestModel.findOneAndDelete({requestedFollower:userRequesting})

    res.status(200).json({
        message: `${userRequesting} is a follower now`,
        follower
    })
}

async function rejectFollower(req,res) {
    const requestedUser = req.user.username
    const userRequesting = req.params.requestedUser

    const mainUserExist = await userModel.findOne({username:requestedUser})

    if(!mainUserExist){
        return res.status(400).json({
            message:"User doesn't Exist"
        })
    }

    const isUserExist = await userModel.findOne({username:userRequesting})

    if(!isUserExist){
        return res.status(400).json({
            message:"User doesn't Exist"
        })
    }

    if(userRequesting === requestedUser){
        return res.status(403).json({
            message:"Access denied"
        })
    }

    await followRequestModel.findOneAndDelete({requestedFollower:userRequesting})

    res.status(403).json({
        message: `The access for user ${userRequesting} is denied`,
    })
}

module.exports = {
    followUserController,
    unfollowUserController,
    acceptFollower,
    rejectFollower
}
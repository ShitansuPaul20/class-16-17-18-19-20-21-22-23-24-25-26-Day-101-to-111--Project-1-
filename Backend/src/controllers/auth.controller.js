const userModel = require('../models/user.model')
const crypto = require('crypto')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function registerController(req,res){

    const {email , username , password , bio , profileImage} = req.body

    const isUserAlreadyExist = await userModel.findOne({
        $or:[
            {username},{email}
        ]
    })

    if(isUserAlreadyExist){
        return res.status(409).json({
            message: (isUserAlreadyExist.email == email)?"User already exist with this email":"User already exist with this username"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        email , username , password:hash , bio , profileImage
    })

    const token = JWT.sign({
        id:user._id,
        username: user.username,
    },process.env.JWT_TOKEN,
        {expiresIn:"1d"}
    )

    res.cookie('token',token)

    res.status(201).json({
        message:"User registered successfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileIMG: user.profileImage
        }
    })
}

async function loginController(req,res){
    const {username , email , password} = req.body

    const user = await userModel.findOne({
        $or:[
            {username:username},{email:email}
        ]
    })

    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }

    const isPasswordExist = await bcrypt.compare(password, user.password)

    if(!isPasswordExist){
        return res.status(200).json({
            message: "Password invalid"
        })
    }

    const token = JWT.sign(
        {id: user._id,username:user.username},
        process.env.JWT_TOKEN,
        {expiresIn : "1d"}
    )

    res.cookie("token",token)

    res.status(200).json({
        message: "User loggedIn Successfully",
        user:{
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileIMG: user.profile_img
        }
    })
}

async function privacyController(req,res){

    const userId = req.user.id
    const {requestedPrivacy} = req.body

    console.log(requestedPrivacy)

    const isUserExist = await userModel.findById(userId)

    if(!isUserExist){
        return res.status(409).json({
            message: "Unauthorized access , either login or register"
        })
    }

    const existedPrivacy = isUserExist.isPrivate

    if(Boolean(requestedPrivacy) === existedPrivacy){
        return res.status(200).json({
            message: (existedPrivacy)?"Your account is already Private":"Your account is alredy Public"
        })
    }

    const user = await userModel.findByIdAndUpdate(
        userId,
        {$set:{isPrivate:Boolean(requestedPrivacy)}},
        { returnDocument: 'after' }
    )

    res.status(200).json({
        message: (Boolean(requestedPrivacy))?"Your account is now Private":"Your account is now Public",
        user
    }) 

}

async function getMeController(req,res) {
    const userId = req.user.id

    const user = await userModel.findById(userId)

    res.status(200).json({
        user:{
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profile_img
        }
    })
}

module.exports = {
    registerController , loginController , privacyController , getMeController
}
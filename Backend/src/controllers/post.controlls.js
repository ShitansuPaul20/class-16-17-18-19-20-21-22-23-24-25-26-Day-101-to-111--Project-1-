const postRouter = require('../models/post.model')
const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')
const jwt = require('jsonwebtoken')
const postModel = require('../models/post.model')


const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function createPostController(req,res){
    console.log(req.body , req.file)


    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token not provided, Unauthorized access"
        })
    }

    let decoded = null

    try{
       decoded = jwt.verify(token , process.env.JWT_TOKEN)
    }catch(err){
        return res.status(401).json({
            message: "User is not authorized"
        })
    }
    
    console.log(decoded)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer) , 'file'),
        fileName: "test",
        folder:"cohort2-insta-clone"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id,
    })

    res.status(201).json({
        message: "post created successfully",
        post
    })
}

async function getPostController(req,res){

    const token = req.cookies.token

    let decoded = null

    try{
        decoded = jwt.verify(token , process.env.JWT_TOKEN)
    }catch(err){
        return res.status(401).json({
            message: "Token Invalid"
        })
    }

    const userId = decoded.id

    const posts = await postModel.find({
        user: userId
    })

    res.status(200).json({
        message:"post fetched successfully",
        posts
    })
}

async function getPostDetailsController(req,res){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "Unauthorized Access"
        })
    }

    let decode = null

    try{
        decode = jwt.verify(token , process.env.JWT_TOKEN)
    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
    
    const userId = decode.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const isValidUser = (post.user.toString() === userId)

    if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden Content."
        })
    }

    return res.status(200).json({
        message: "Post Fetched successfully",
        post,
    })

}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController
}

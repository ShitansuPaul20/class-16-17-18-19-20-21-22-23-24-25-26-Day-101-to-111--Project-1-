const postRouter = require('../models/post.model')
const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')
const jwt = require('jsonwebtoken')
const postModel = require('../models/post.model')
const likeModel = require('../models/likes.model')


const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function createPostController(req,res){
    console.log(req.body , req.file)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer) , 'file'),
        fileName: "test",
        folder:"cohort2-insta-clone"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id,
    })

    res.status(201).json({
        message: "post created successfully",
        post
    })
}

async function unlikePostController(req , res) {
    try{
        const {postId} = req.params

        const user = req.user.username

        const isLiked = await likeModel.findOneAndDelete({
            post: postId,
            user: user
        })

        if(!isLiked){
            return res.status(401).json({
                message: "Not Likeed by you"
            })
        }

        

        return res.status(200).json({
            success: true,
            message: "Post unliked successfully"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error unliking post",
            error: error.message
        });
    }
    
}

async function getPostController(req,res){

    const userId = req.user.id

    const posts = await postModel.find({
        user: userId
    })

    res.status(200).json({
        message:"post fetched successfully",
        posts
    })
}

async function getPostDetailsController(req,res){
    
    const userId = req.user.id
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

async function likePostController(req, res) {

    const username = req.user.username
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const like = await likeModel.create({
        post: postId,
        user: username
    })

    res.status(200).json({
        message: "post liked successfully",
        like
    })

    
}

async function getFeedController(req,res) {

    const user = req.user

    const posts = await Promise.all((await postModel.find({}).sort({_id:-1}).populate("user").lean())
                    .map(async (post)=>{
                        
                        const isLiked = await likeModel.findOne({
                            user: user.username,
                            post: post._id
                        })

                        post.isLiked = !!isLiked 
        
                        return post
                    }))

    res.status(200).json({
        message:"posts fetched successfully",
        posts
    })
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController,
    likePostController,
    unlikePostController,
    getFeedController
}

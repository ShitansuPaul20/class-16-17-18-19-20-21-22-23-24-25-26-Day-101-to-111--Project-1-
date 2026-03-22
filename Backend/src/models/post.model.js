const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        default: ""
    },
    imgUrl:{
        type: String,
        required: [true, "imgUrl is required for creating a post"]
    },
    user:{
        ref:"users",
        type: mongoose.Schema.Types.ObjectId,
        required: ['true' , "User id is required for creating an post"]
    },
    contentType: {
        type: String,
        enum: ['post', 'reel', 'tagged'],
        default: 'post'
    }
},{timestamps: true})

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel
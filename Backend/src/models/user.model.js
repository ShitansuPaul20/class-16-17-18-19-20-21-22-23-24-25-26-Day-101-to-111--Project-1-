const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true,"Username has already exists"],
        required: [true,"Username is required"]
    },
    email:{
        type: String,
        unique: [true,"Email has already exists"],
        required: [true,"Email is required"]
    },
    password:{
        type: String,
        required: [true,"Password is required"],
        select: false
    },
    bio:{
        type: String,
        default: "Bio",
    },
    profile_img:{
        type:String,
        default:"https://ik.imagekit.io/yhvjrutsa/imagei.jpg",
    },
    isPrivate:{
        type:Boolean,
        default: false
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel
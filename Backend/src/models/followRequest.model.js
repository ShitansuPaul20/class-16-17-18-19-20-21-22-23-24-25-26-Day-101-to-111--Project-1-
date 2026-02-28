const mongoose = require('mongoose')

const followRequestSchema = new mongoose.Schema({
    requestedFollower:{
        type:String,
        required: [true]
    },
    requestedFollowee:{
        type:String,
        required: [true]
    }
},{
    timestamps : true
})

const followRequestModel = mongoose.model("followRequest",followRequestSchema)

module.exports = followRequestModel


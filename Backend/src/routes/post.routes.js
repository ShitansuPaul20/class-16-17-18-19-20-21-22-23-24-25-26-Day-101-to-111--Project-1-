const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controlls")
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})
const identifyUsers = require("../middlewire/auth.middlewire")
/**
 * post(/api/posts) [protected]
 * -req.body = {caption , image-file}
 */

postRouter.post("/",upload.single("image"),identifyUsers, postController.createPostController)

/**
 * get method
 */

postRouter.get("/",identifyUsers,postController.getPostController)

postRouter.get("/details/:postId",identifyUsers,postController.getPostDetailsController)

/**
 * @ route POST/api/posts/like/:postid
 * @ description like a post with the id provided in the request parameters
 */

postRouter.post("/like/:postId", identifyUsers , postController.likePostController)

module.exports = postRouter
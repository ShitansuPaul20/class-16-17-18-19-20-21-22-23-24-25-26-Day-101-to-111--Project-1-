const User = require('../models/user.model');

const fetchUserProfile = async (req, res) => {
    try {
        const user = req.user; 
        const userId = req.params.userId;


        console.log("Middleware se aaya User:", user);
        console.log("URL se aayi requested User ID:", userId);

        const userProfile = await User.findOne({ _id: userId }).populate('posts');

        if (!userProfile) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        return res.status(200).json({
            id: userProfile._id,
            name: userProfile.username,
            profilePicture: userProfile.profile_img,
            bio: userProfile.bio,
            posts: userProfile.posts.filter(post => post.contentType === 'post'),
            reels: userProfile.posts.filter(post => post.contentType === 'reel'),
            tagged: userProfile.posts.filter(post => post.contentType === 'tagged'),
            isPrivate: userProfile.isPrivate,
        });

    } catch (error) {
        console.error("Profile fetch error:", error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {
    fetchUserProfile  
};

import { useContext , useEffect} from "react";
import { createPost, getFeed, likePost, unlikePost } from "../services/post.api";
import { PostContext } from "../postContext";


export const usePost = ()=>{
    const context = useContext(PostContext)

    const {Loading , setLoading , Post , Feed , setFeed} = context

    const handleGetFeed = async ()=>{ 
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts)
        setLoading(false)
    }

    const handleCreatePost = async (imageFile , caption)=> {

        setLoading(true)
        const data = await createPost(imageFile , caption)
        setFeed([data.post , ...Feed])
        setLoading(false)

        
    }

    const handleLike = async (post)=>{
        setLoading(true)
        const data = await likePost(post)
        await handleGetFeed()
        setLoading(false)
 
    }

     const handleUnLike = async (post)=>{
        setLoading(true)
        const data = await unlikePost(post)
        await handleGetFeed()
        setLoading(false)
    }

    useEffect(()=>{
        handleGetFeed()
    },[])

    return {Loading , Feed , Post , handleGetFeed , handleCreatePost , handleLike , handleUnLike}
}
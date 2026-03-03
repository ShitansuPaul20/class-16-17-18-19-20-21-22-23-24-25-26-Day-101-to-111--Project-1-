import { useContext } from "react";
import { getFeed } from "../services/post.api";
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

    return {Loading , Feed , Post , handleGetFeed}
}
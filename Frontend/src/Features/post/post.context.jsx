import { useState } from "react";
import { PostContext } from "./postContext";

export const PostContextProvider = ({children})=>{

    const [Loading, setLoading] = useState(false)
    const [Post, setPost] = useState(null)
    const [Feed, setFeed] = useState(null)


    return (
        <PostContext.Provider value={{Loading , setLoading , Post , setPost , Feed ,setFeed}}>
            {children}
        </PostContext.Provider>
    )
}
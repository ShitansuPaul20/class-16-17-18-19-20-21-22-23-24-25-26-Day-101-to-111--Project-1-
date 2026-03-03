import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../Components/Post'
import { usePost } from '../Hook/usePost'


const Feed = () => {

  const {Feed , handleGetFeed , Loading} = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])

  if(Loading || !Feed){
    return (<main><h1>Feed is Loading....</h1></main>)
  }

  return (
    <main className='feed-page'>
        <div className="feed">
            <div className="posts">
              {Feed.map(e=>{
                return <Post user={e.user} image={e.imgUrl} caption={e.caption} isLiked={e.isLiked}/>
              })}
            </div>
        </div>
    </main>
  )
}

export default Feed
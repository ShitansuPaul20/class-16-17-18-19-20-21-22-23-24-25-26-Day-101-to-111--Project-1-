import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../Components/Post'
import { usePost } from '../Hook/usePost'

const Feed = () => {

  const {Feed , handleGetFeed , Loading , handleLike , handleUnLike} = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])

  console.log(Feed)

  if(Loading || !Feed){
    return (<main><h1>Feed is Loading....</h1></main>)
  }

  return (
    <main className='feed-page'>
        <div className="feed">
            <div className="posts">
              {Feed.map(e=>{
                return <Post key={e.id} user={e.user} url={e.imgUrl} caption={e.caption} isLiked={e.isLiked} Loading={Loading} handleLike={handleLike} handleUnLike={handleUnLike} contentType={e.contentType} />
              })}
            </div>
        </div>
    </main>
  )
}

export default Feed
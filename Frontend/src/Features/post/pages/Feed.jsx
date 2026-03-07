import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../Components/Post'
import { usePost } from '../Hook/usePost'
import Nav from '../../Shared/Components/Nav'


const Feed = () => {

  const {Feed , handleGetFeed , Loading , handleLike , handleUnLike} = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])

  if(Loading || !Feed){
    return (<main><h1>Feed is Loading....</h1></main>)
  }

  return (
    <main className='feed-page'>
      <Nav/>
        <div className="feed">
            <div className="posts">
              {Feed.map(e=>{
                return <Post user={e.user} image={e.imgUrl} caption={e.caption} isLiked={e.isLiked} Loading={Loading} handleLike={handleLike} handleUnLike={handleUnLike}/>
              })}
            </div>
        </div>
    </main>
  )
}

export default Feed
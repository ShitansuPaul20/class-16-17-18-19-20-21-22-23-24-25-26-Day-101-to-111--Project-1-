import React from 'react'
import SuggestionBox from './SuggestionBox'
import Request from './Request'
import Trending from './Trending'
import '../Style/interactive.scss'

const InteractiveBar = () => {
  return (
    <>
      <div className="interaction-box">
        <div className="suggestion-container">
          <SuggestionBox/>
        </div>
        <div className="friend-request-container">
          <Request/>
        </div>
        <div className="trending-page-container">
          <Trending/>
        </div>
      </div>
    </>
  )
}

export default InteractiveBar
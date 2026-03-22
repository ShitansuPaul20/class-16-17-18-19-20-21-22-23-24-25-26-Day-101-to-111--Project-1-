import React from 'react'
import Feed from '../pages/Feed'
import Nav from '../../Shared/Components/Nav'
import Sidebar from '../../Shared/Components/Sidebar'
import '../../Shared/Style/style.scss'
import InteractiveBar from '../../Shared/Components/InteractiveBar'

const Homepage = () => {
  return (
    <>
      <div className="home">

        <div className="nav">
          <Nav/>
        </div>
        <div className="stories-section-container">
          
        </div>
          <div className="sidebar">
           <Sidebar/>
          </div>
          <div className="interactions-all-container">
            <InteractiveBar/>
          </div>
          <div className="feedpage">
            <Feed/>
          </div>
      </div>
    </>
  )
}

export default Homepage
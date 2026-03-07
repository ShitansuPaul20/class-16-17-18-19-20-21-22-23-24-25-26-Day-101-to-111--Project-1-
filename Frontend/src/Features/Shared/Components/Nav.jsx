import React from 'react'
import '../Style/style.scss'
import '../Style/Nav.scss'
import { useNavigate } from 'react-router'


const Nav = () => {

    const navigate = useNavigate()

  return (
    <nav className='Nav-bar'>
        <p>Insta</p>
        <button 
        onClick={()=>{navigate("/create-post")}}
        className='button primary-button'>New Post</button>

    </nav>
  )
}

export default Nav
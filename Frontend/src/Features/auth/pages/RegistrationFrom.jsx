import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../Hooks/useAuth';

const RegistrationFrom = () => {

  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const {handleRegister} = useAuth()

  async function submitHandler(e) {
    e.preventDefault()

    handleRegister(Username , Email , Password)
    .then(res=>{
        console.log(res)
    })
  }

  return (
    <main>
        <div className="From-container">
            <h1>Create Account</h1>
            <form onSubmit={submitHandler}>
                <input
                  onChange={(e)=>{setUsername(e.target.value)}}
                  value={Username}
                  type="text" 
                  name='username' 
                  placeholder='Enter Username'/>
                <input 
                  onChange={(e)=>{setEmail(e.target.value)}}
                  value={Email} 
                  type="email"
                  name="email"
                  placeholder='Enter Email Id' />
                <input 
                  onChange={(e)=>{setPassword(e.target.value)}}
                  value={Password} 
                  type="text" 
                  name='password' 
                  placeholder='Enter Password'/>
                <button>Create Account</button>
            </form>
            <p>Already have an account? <Link className='toogleAuthForm' to="/login">Login</Link></p>
        </div>
    </main>
  )
}

export default RegistrationFrom
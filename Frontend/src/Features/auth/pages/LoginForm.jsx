import React from 'react'
import "../Style/Form.scss"
import { Link } from 'react-router'
import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {

  const [User, setUser] = useState("")
  const [Pass, setPass] = useState("")

  async function loginHandler(e) {
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/login",{
      username: User ,password: Pass
    },{
      withCredentials: true
    }).then(res=>{
      console.log("User Logged in Successfully",res.data)
    })
  }

  return (
    <main>
        <div className="From-container">
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <input
                  onChange={(e)=>setUser(e.target.value)}
                  value={User}
                  type="text" 
                  name='username'
                  placeholder='Enter Username'/>
                <input
                  onChange={(e)=>setPass(e.target.value)}
                  value={Pass}
                  type="text" 
                  name='password' 
                  placeholder='Enter password'/>
                <button>Login</button>
            </form>
            <p>Don't have an account? <Link className='toogleAuthForm' to="/register">Create Account</Link></p>
        </div>
    </main>
  )
}

export default LoginForm
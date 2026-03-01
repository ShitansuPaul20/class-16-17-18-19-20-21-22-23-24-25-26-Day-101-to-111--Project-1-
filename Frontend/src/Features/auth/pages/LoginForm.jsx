import React from 'react'
import "../Style/Form.scss"
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import { useAuth } from '../Hooks/useAuth'

const LoginForm = () => {

  const [User, setUser] = useState("")
  const [Pass, setPass] = useState("")

  const {handleLogin , loading} = useAuth()
  const navigate = useNavigate()

  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }

  async function loginHandler(e) {
    e.preventDefault()

    handleLogin(User , Pass)
    .then(res=>{
      console.log(res)
      navigate("/")
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
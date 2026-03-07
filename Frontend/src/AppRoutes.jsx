import {Route, Routes} from 'react-router'
import RegistrationForm from './Features/auth/pages/RegistrationFrom'
import LoginForm from './Features/auth/pages/LoginForm'
import Feed from './Features/post/pages/Feed'
import CreatePost from './Features/post/pages/Create-post'


const AppRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegistrationForm/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
      </Routes>
    </>
      
  )
}

export default AppRoutes
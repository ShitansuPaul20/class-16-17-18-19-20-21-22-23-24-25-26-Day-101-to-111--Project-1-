import {Route, Routes} from 'react-router'
import RegistrationForm from './Features/auth/pages/RegistrationFrom'
import LoginForm from './Features/auth/pages/LoginForm'
import Feed from './Features/post/pages/Feed'


const AppRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegistrationForm/>}/>
      </Routes>
    </>
      
  )
}

export default AppRoutes
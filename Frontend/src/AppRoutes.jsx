import {Route, Routes} from 'react-router'
import RegistrationForm from './Features/auth/pages/RegistrationFrom'
import LoginForm from './Features/auth/pages/LoginForm'
import ProfilePage from './Features/profile/pages/ProfilePage'

import CreatePost from './Features/post/pages/Create-post'
import Homepage from './Features/post/services/Homepage'


const AppRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegistrationForm/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/profile' element={<Homepage/>}/>
          <Route path='/profile/:userId' element={<ProfilePage />} />
      </Routes>
    </>
      
  )
}

export default AppRoutes
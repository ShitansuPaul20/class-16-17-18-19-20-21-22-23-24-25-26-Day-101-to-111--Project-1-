import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./Features/auth/auth.context"
import { PostContextProvider } from "./Features/post/post.context.jsx"
import { ProfileProvider } from "./Features/profile/profile.context.jsx"
import "./style.scss"

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <ProfileProvider>
          <AppRoutes/>
        </ProfileProvider>
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App

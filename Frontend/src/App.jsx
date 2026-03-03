import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./Features/auth/auth.context"
import { PostContextProvider } from "./Features/post/post.context.jsx"
import "./style.scss"

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <AppRoutes/>
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App

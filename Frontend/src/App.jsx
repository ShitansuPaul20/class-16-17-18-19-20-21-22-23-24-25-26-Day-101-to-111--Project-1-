import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./Features/auth/auth.context"
import "./style.scss"

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
    
  )
}

export default App

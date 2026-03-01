import { createContext , useState , useEffect } from "react";
import { getMe, login, register } from "./Services/auth.api.jsx";


export const AuthContext = createContext()

export function AuthProvider({children}){
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(false)

    const handleLogin = async(username , password) =>{
        setloading(true)
        try{
            const response = await login(username , password)
            setuser(response.user)
            return response;
        }
        catch(err){
            console.log(err)
            throw err
        }finally{
            setloading(false)
        }
    }

    const handleRegister = async(username ,email , password) =>{

        setloading(true)

        try{
            const response = await register(username , email , password)
            setuser(response.user)
            return response;
        }catch(err){
            console.log(err)
            throw err
        }
        finally{
            setloading(false)
        }
    }

    return (
    <AuthContext.Provider value={{user,loading,handleLogin,handleRegister}}>
        {children}
    </AuthContext.Provider>
    )
}



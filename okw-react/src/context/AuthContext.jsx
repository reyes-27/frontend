import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import { useNavigate, Outlet } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    // localStorage.getItem(authTokens)
    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    let loginUser = async (event) => {
        event.preventDefault()
        // console.log("hola")

        const body = {
            'username':event.target.username.value,
            'password':event.target.password.value
        }
        const response = await axios.post('http://127.0.0.1:8000/api/token/', body, {
            headers:{
                'Content-Type':'application/json'
            },
        })
        if (response.status === 200){
            setAuthTokens(response.data)
            setUser(jwtDecode(response.data.access))
            localStorage.setItem("authTokens", JSON.stringify(response.data))
            navigate('/')
        }else{
            alert('Something went wrong')
        }
    }

    useEffect(() => {
        if (authTokens){
            setUser(jwtDecode(localStorage.getItem('authTokens')))
            console.log("Nigga")
        }else{
            setUser(null)
            console.log("WHyyyyyyy")
        }
    }, [authTokens])

    let contextData = {
        user: user,
        loginUser: loginUser,
        test: "Your context is working"
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
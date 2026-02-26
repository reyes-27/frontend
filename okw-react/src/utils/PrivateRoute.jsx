import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext, {AuthProvider} from '../context/AuthContext'


const PrivateRoute = () => {
    let {user, test} = useContext(AuthContext)

    return(
        
        <AuthProvider>
            {console.log(user)}
            {user ? <Outlet/> : <Navigate to='/login/'/>}
        </AuthProvider>
        
    )
}

export default PrivateRoute;
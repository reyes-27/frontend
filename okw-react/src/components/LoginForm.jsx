import React, {useContext}  from 'react'
import AuthContext from '../context/AuthContext'

const LoginForm = () => {
    let Auth = useContext(AuthContext)
    return(
        <form onSubmit={Auth.loginUser}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default LoginForm;
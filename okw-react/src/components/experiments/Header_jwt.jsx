import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const Header_jwt = () => {
  let {user} = useContext(AuthContext)
  return (
    <div>
      <nav>
        <div style={{display:"flex"}}>
            <Link to='/'>Home</Link>
            {user ? (
            <p>Hi {user.username} </p>,
            <p>logout</p>
            ) : <Link to='/login/'>Login</Link>}
        </div>
      </nav>
    </div>
  )
}

export default Header_jwt

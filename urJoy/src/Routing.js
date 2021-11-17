import React from 'react'
import { Link } from 'react-router-dom'
import FirstPage from './FirstPage'
import LoginPage from './LoginPage'

const Routing = () => {
    return (
        <div>
            <Link to='/'><FirstPage></FirstPage></Link>
            <Link to='/login'><LoginPage></LoginPage></Link>
        </div>
    )
}

export default Routing

import React from 'react'
import Heading from './Heading'
import Card from './Card'
import './Register.css'
import queue from './images/queue.png'
import docVar from './images/docVar.png'
import tc from './images/tc.png'
import { Link } from 'react-router-dom'


const Register = () => {
    return (
        <div>
            <Heading></Heading>
            <div className='card'>
               <Link to='/queue'> <img src={docVar} className='card_style'></img> </Link>
                <img src={tc} className='card_style'></img>
            </div>
        </div>
    )
}

export default Register

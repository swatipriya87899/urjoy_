import React from 'react'
import { Link } from 'react-router-dom'

const profile={
    color:'white',
    fontSize: '2rem',
    padding: '2rem',
    textAlign: 'center'
}

const explore={
    fontSize:'1.rem',
    marginTop: '1rem'
}

const Profile = (props) => {
    return (
        <div>
            <div style={profile}>
            <div>{props.name}</div>
           <div>Time Left: {props.timing}</div>
           </div>
        </div>
    )
}

export default Profile

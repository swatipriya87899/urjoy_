import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <div>
            <div className='card_box'>
              <div className='heading'>{props.heading}</div>  
            </div>
        </div>
    )
}

export default Card

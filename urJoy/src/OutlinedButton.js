import React from 'react'
import './OutlinedButton.css'
const OutlinedButton = (props) => {
    return (
        <div className='btn'>
            <div className='outlined_btn'>
               {props.name}
            </div>
            
        </div>
    )
}

export default OutlinedButton

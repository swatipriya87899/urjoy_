import React from 'react'
import './SolidButton.css'
const SolidButton = (props) => {
    return (
        <div className='btn'>
            <div className='solid_btn'>
                {props.name}
            </div>
        </div>
    )
}

export default SolidButton

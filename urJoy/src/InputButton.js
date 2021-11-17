import React from 'react'
import './InputButton.css'
const InputButton = (props) => {
    return (
        <div>
            <input type='text' className='input_btn' placeholder={props.name}></input>
            
        </div>
    )
}

export default InputButton

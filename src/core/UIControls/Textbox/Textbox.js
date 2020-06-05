import React from 'react'
import './Textbox.scss';

export default function Textbox(props) {
    return (
        <div className="text-box">
            <label>{props.label}</label>
            <input autoComplete="off" {...props.input} />
        </div>
    )
}

import React from 'react'

export default function Textbox(props) {
    return (
        <div className="flex">
                <label>{props.label}</label>
                <input autoComplete="off" {...props.input} />
        </div>
    )
}

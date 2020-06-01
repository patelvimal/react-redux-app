import React from 'react'

export default function Checkbox(props) {
    return (
        <div className="checkbox">
            <input type="checkbox" {...props.input} checked={props.input.value}/>
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

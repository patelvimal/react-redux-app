import React from 'react'
import './Textarea.scss';

export default function Textarea(props) {
    return (
        <div className="text-area">
            <label>{props.label}</label>
            <textarea {...props.input} />
        </div>
    )
}

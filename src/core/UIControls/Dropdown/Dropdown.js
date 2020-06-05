import React from 'react'

export default function Dropdown(props) {
    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select {...props.input}>
                {
                    props.datasource && props.datasource.map((item,index)=> {
                        return <option value={item.id} key={index}>{item.value}</option>
                    })
                }
            </select>
        </div>
    )
}

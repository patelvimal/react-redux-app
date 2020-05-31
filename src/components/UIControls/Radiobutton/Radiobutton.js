import React from 'react'

export default function Radiobutton(props) {
    return (
        <div className="radio-button">
            {
                props.datasource && props.datasource.map(item => {
                    <>
                        <input type="radio" name={props.name} value={item.id} />
                        <label for="vehicle1">{item.value}</label>
                    </>
                })
            }

        </div>
    )
}

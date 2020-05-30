import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss';

const Button = props => {

    const buttonClick = () => {

    }
    
    return (
        <button type="button" 
        className="button" 
        disabled={props.disabled}
        onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

Button.propTypes = {

}

export default Button;


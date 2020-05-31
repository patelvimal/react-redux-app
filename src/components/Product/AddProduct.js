import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Textbox from '../UIControls/Textbox/Textbox'
import Button from '../UIControls/Button/Button'

const renderInput = ({ input, label, meta }) => {
    return (
        <div className="flex">
            <label>{label}</label>
            <input autoComplete="off" {...input} />
        </div>
    )
};


function AddProduct() {
    return (
        <form>
            <Field
                name="name"
                label="Product Name"
                component={renderInput}
            />
             <Field
                name="name1"
                label="Product Name"
                component={Textbox}
            />
            <Button text="Submit"/>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(AddProduct)


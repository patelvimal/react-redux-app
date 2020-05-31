import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '../UIControls/Button/Button';
import Textarea from '../UIControls/Textarea/Textarea';
import Textbox from '../UIControls/Textbox/Textbox';

const renderInput = ({ input, label, meta }) => {
    return (
        <div className="flex">
            <label>{label}</label>
            <input autoComplete="off" {...input} />
        </div>
    )
};

function AddProduct(props) {

    const onSave = (formValues) => {
        props.handleSubmit(props.onSubmit);
    }

    return (
        <form>
            <Field
                name="name1"
                label="Product Name"
                component={renderInput}
            />
             <Field
                name="name"
                label="Product Name"
                component={Textbox}
            />
            <Field
                name="description"
                label="Product Description"
                component={Textarea}
            />
            <Button text="Save" onClick={props.handleSubmit(props.onSubmit)}/>
            <Button text="Close"/>
        </form>
    )
}

export default reduxForm({form: 'saveProduct'})(AddProduct)


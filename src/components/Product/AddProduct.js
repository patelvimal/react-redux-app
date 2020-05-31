import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '../UIControls/Button/Button';
import Checkbox from '../UIControls/Checkbox/Checkbox';
import Dropdown from '../UIControls/Dropdown/Dropdown';
import Textarea from '../UIControls/Textarea/Textarea';
import Textbox from '../UIControls/Textbox/Textbox';

function AddProduct(props) {

    const categories = [
        { id: '1', value: 'Books' },
        { id: '2', value: 'Electronics' }
    ]

    return (
        <form>
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
            <Field
                name="category"
                label="Category"
                component={Dropdown}
                datasource={categories}
            />
            <Field
                name="status"
                label="Active"
                component={Checkbox}
            />
            <Button text="Save" onClick={props.handleSubmit(props.onSubmit)} />
            <Button text="Close" />
        </form>
    )
}

const initialValues = {
    category : 2,
    status:true,
    name:''
}
export default reduxForm({ form: 'saveProduct', initialValues })(AddProduct)


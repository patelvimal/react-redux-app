import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Checkbox from '../../core/UIControls/Checkbox/Checkbox';
import Dropdown from '../../core/UIControls/Dropdown/Dropdown';
import Textarea from '../../core/UIControls/Textarea/Textarea';
import Textbox from '../../core/UIControls/Textbox/Textbox';
import Button from '../../core/UIControls/Button/Button';

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

const validate = (formValues) => {
    var errors={};
    if (!formValues.name) {
        errors.name="Product Name is required";
    }
    if (!formValues.description) {
        errors.name="Product Description is required";
    }
    return errors;
}
const initialValues = {
    category : 2,
    status:true,
    name:''
}
export default reduxForm({ form: 'saveProduct', initialValues, validate })(AddProduct)


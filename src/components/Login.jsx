import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

export class Login extends Component {

    onSubmit = (formValues)=> {
        console.log(formValues);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                />           
                <input type="submit"/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'login'
})(Login)

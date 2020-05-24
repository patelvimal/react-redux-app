import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

export class Login extends Component {

    renderError = ({ error, touched }) => {
        if (touched && error ) {
            return (
                <div>
                    {error}
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="flex">
                <label>{label}</label>
                <input autoComplete="off" {...input} />
                {this.renderError(meta)}
            </div>
        )
    };

    renderPassword = ({ input, label,meta }) => {
        return (
            <div className="flex">
                <label>{label}</label>
                <input autoComplete="off" {...input} type="password" />
                {this.renderError(meta)}
            </div>
        )
    };


    onSubmit = (formValues) => {
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name="name"
                    component={this.renderInput}
                    label="User Name"
                />
                <Field
                    name="password"
                    component={this.renderPassword}
                    label="Password"
                />
                <input type="submit" />
            </form>
        )
    }
}


const validate = (formValues) => {
    var error = {}
    if (!formValues.name) {
        error.name = "UserName is required";
    }
    if (!formValues.password) {
        error.password = "Password is required";
    }
    console.log(error);
    return error;
}

export default reduxForm({
    form: 'login',
    validate
})(Login)

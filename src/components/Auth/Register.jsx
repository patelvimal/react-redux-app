import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { registerUser } from '../actions';

export class Register extends Component {

    renderError = ({ error, touched }) => {
        if (touched && error ) {
            return (
                <div>
                    {error}
                </div>)
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
        this.props.registerUser(formValues);
        //this.props.dispatch(registerUser(formValues));
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
                    name="email"
                    component={this.renderInput}
                    label="Email"
                />
                {/* <Field
                    name="password"
                    component={this.renderPassword}
                    label="Password"
                /> */}
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
    if (!formValues.email) {
        error.email = "Email is required";
    }
    return error;
}

const formWrapper = reduxForm({
    form: 'login',
    validate
})(Register)


export default connect(null,{registerUser})(formWrapper);
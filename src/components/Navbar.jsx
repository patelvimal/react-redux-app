import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <h2>React-Redux-App</h2>
                <div>
                    <Link to="/" className='pad-4'>Home</Link>
                    <Link to="/login" className='pad-4'>Login</Link>
                    <Link to="/register" className='pad-4'>Register</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})


export default connect()(Navbar)

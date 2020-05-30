import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.scss';
export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <h3>Navbar</h3>
                {/* <div>
                    <Link to="/login" className='pad-4'>Login</Link>
                    <Link to="/register" className='pad-4'>Register</Link>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})


export default connect()(Navbar)

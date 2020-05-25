import React,{Component  } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <h2>React-Redux-App</h2>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})


export default connect()(Navbar)

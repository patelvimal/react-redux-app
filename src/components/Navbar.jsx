import React,{Component  } from 'react'
import { connect } from 'react-redux'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <h2>Navbar</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})


export default connect()(Navbar)

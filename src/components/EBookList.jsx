import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../actions/eBook-actions'

export class BookList extends Component {

    componentDidMount = () => {
        this.props.getBooks();
    }

    render() {
        return (
            <div>
                BookList
                {JSON.stringify(this.props.eBook)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    eBook: state.eBook.list
})


export default connect(mapStateToProps, {getBooks})(BookList)
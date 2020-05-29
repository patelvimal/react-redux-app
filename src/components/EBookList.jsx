import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../actions/eBook-actions'
import  Model  from './Model';

export class BookList extends Component {

    componentDidMount = () => {
        console.log(this.props)
        this.props.dispatch(getBooks());
    }

    componentDidUpdate = () => {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <div><button>Add Book</button></div>
               {
                   this.props.bookList && this.props.bookList.map(book=>(
                       <div key="1">{book.title}</div>
                   ))
               }
               <Model><h2>I am in a Model</h2></Model>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bookList: state.eBook.list
})


export default connect(mapStateToProps)(BookList)
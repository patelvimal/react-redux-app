import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal-dialog';




class Model extends Component {

    componentDidMount = () => {
       // this.props.dispatch(closeModal());
       // this.props.dispatch(getBooks());
    }

    componentDidUpdate = ()=>{
        console.log(this.props)
    }

    closeDialog = () => {
        this.props.dispatch(closeModal());
    }

    render() {
        return  this.props.dialog && this.props.dialog.show ? (
            ReactDOM.createPortal(
                <div id="myModal" className="modal">
                    <div className="modal-dialog">
                        <div className="modal-header">
                            <div className="close"><button onClick={this.closeDialog}>Close</button></div>
                        </div>
                        <div className="modal-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>,
            document.querySelector('#model'))
        ): null
    }
}

const mapStateToProps = (state)=> ({
    dialog : state.dialog
    
})

export default connect(mapStateToProps,null)(Model)
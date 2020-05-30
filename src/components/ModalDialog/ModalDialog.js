import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './ModalDialog.scss';

const ModalDialog = (props)=> {

    const closeDialog = () => {
        props.onClose();
    }
    console.log(props);
    return  props.show ? (
        ReactDOM.createPortal(
            <div id="myModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-header">
                        <div className="close"><button onClick={closeDialog}>Close</button></div>
                    </div>
                    <div className="modal-content">
                        {props.children}
                    </div>
                </div>
            </div>,
        document.querySelector('#model'))
    ): null
}


ModalDialog.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func
}


export default ModalDialog;
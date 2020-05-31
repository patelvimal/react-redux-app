import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalDialog from '../../components/ModalDialog/ModalDialog';

export class ModalDialogContainer extends Component {

    componentDidMount = () => {
       // this.props.dispatch(getDialogStatus());
    }

    render() {
        return (
            <div>
                <ModalDialog {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.modalDialog
})

export default connect(mapStateToProps)(ModalDialogContainer)

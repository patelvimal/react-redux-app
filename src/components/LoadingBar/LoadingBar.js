import React from 'react'
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './LoadingBar.scss';

const LoadingBar = (props) => {
    console.log(props);
    
    return props.loading ? (
        ReactDOM.createPortal(
            <div className="loading">
                <h2>Loading....</h2>
            </div>,
        document.querySelector('#loader'))
    ): null
}

const mapStateToProps = (state)=>({
    loading: state.api.loading
})

export default connect(mapStateToProps,null)(LoadingBar);
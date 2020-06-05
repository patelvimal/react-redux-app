import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import AppRoutes from '../Routes';
import { connect } from 'react-redux';

function HomePage(props) {
    console.log(props.redirect)
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar />
            <AppRoutes />
            {props.redirect ? <Redirect to="error" /> : null}
        </BrowserRouter>
    )
}


const mapStateToProps = (state) => ({
    redirect: state.app.redirect
})

export default connect(mapStateToProps)(HomePage);

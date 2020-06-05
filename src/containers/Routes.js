import React from 'react'
import ProductPage from './ProductPage';
import { Route } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/ErrorPage';

export default function AppRoutes() {
    return (
        <div>
            <Route path='/' exact component={ProductPage}/>
            <Route path='/error' exact component={ErrorPage}/>
        </div>
    )
}

import React from 'react'
import ProductPage from './ProductPage';
import { Route } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <div>
            <Route exact path='/' component={ProductPage}/>
        </div>
    )
}

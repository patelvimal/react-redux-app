import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import AppRoutes from '../Routes';

export default function HomePage() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    )
}

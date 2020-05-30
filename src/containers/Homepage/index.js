import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
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

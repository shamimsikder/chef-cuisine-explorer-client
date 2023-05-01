import React from 'react';
import Navbar from '../../CommonLayout/Navbar.jsx/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Common = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Common;
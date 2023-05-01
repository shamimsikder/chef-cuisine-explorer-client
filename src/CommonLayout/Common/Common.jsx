import React from 'react';
import Navbar from '../../CommonLayout/Navbar.jsx/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Common = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-336px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Common;
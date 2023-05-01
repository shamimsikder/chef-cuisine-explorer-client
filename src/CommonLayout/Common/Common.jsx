import React from 'react';
import Navbar from '../../CommonLayout/Navbar.jsx/Navbar';
import { Outlet } from 'react-router-dom';

const Common = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Common;
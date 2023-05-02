import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
    return (
        <div className="navbar w-full max-w-7xl mx-auto text-black">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-50 rounded-box w-52">
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/'>Home</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/about'>About</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/blog'>Blogs</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/blogs'>Blogs</NavLink ></li>
                    </ul>
                </div>
                <Link to='/' className=" font-semibold text-2xl">Chef <span className='text-[#31B567]'>Cuisine</span> Explorer</Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-2 menu-horizontal px-1">
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/about'>About</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/blog'>Blogs</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/blogs'>Blogs</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <button className="px-4 py-2 bg-[#31B567] text-white rounded-md">
                    <Link to='/login'>Login</Link>
                </button>
            </div>

        </div>
    );
};

export default Navbar;
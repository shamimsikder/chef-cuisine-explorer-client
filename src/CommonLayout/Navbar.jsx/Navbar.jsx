import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-sky-600 text-white">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-sky-500 rounded-box w-52">
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" } to='/'>Home</NavLink ></li>
                        <li><Link to='/blog'>Blogs</Link ></li>
                        <li><Link to='/home'>Home</Link ></li>
                        <li><Link to='/blog'>Blogs</Link ></li>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Chef Cuisine Explorer</Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <button className="px-3 py-2 border-[1px] border-[text-white] rounded-md">
                    <Link to='/login'>Login</Link>
                </button>
            </div>

        </div>
    );
};

export default Navbar;
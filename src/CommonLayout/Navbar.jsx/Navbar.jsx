import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';

const Navbar = () => {

    const {user, logOut} =useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then()
            .catch(error => {
                console.error(error.message)
            })

    }

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
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/blogs'>Blogs</NavLink ></li>
                    </ul>
                </div>
                <Link to='/' className=" font-semibold text-2xl">Chef <span className='text-[#31B567]'>Cuisine</span> Explorer</Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-2 menu-horizontal px-1">
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/about'>About</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : "" } to='/blogs'>Blogs</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center ">
                {
                    user && <div className="w-10 h-10 rounded-full mr-5 tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>
                              <img className='rounded-full w-10 h-10' src={user?.photoURL} />
                            </div>
                }
                {
                    user ? <button onClick={handleLogOut} className="px-4 py-2 bg-[#31B567] text-white rounded-md">
                                <Link to='/'>Log Out</Link>       
                            </button>
                    :       <button className="px-4 py-2 bg-[#31B567] text-white rounded-md">
                                <Link to='/login'>Login</Link>
                            </button>
                }
            </div>

        </div>
    );
};

export default Navbar;
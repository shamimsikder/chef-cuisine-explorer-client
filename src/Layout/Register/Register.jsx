import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = () => {

    }

    return (
        <div className='w-full max-w-6xl mx-auto mt-10 mb-10 p-5 md:p-0'>
            
            <div className="flex flex-col justify-center items-center mx-auto w-full md:w-2/3 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleRegister} className="">
                    <h2 className="text-2xl font-bold mb-6">Register</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="w-full text-gray-700 font-bold mb-2">Name</label>
                        <input type="text" name="name" placeholder='Enter Your Name' className="w-full border-gray-400 border-2 p-3 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="w-full text-gray-700 font-bold mb-2">Photo URL</label>
                        <input type="text" name="photo" placeholder='Enter Your Photo URL' className="w-full border-gray-400 border-2 p-3 rounded-md" required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="w-full text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" name="email" placeholder='Enter Your Email' className="w-full border-gray-400 border-2 p-3 rounded-md" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="w-full text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" name="password" placeholder='Enter Your Password' className="w-full border-gray-400 border-2 p-3 rounded-md" required/>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mb-6">Register</button>
                </form>

                <p className='mb-2 mt-4'>Already have account? <Link to='/register' className='text-blue-500'>Login</Link></p>
                <p className='font-semibold text-xl text-gray-700'>or Login With</p>

                <div className="w-full md:w-[82%] bg-[#C54238] text-white p-3 rounded-md mt-6 mb-6">
                    <button className='flex justify-center items-center gap-10'>
                        <FaGoogle/> <span>Sign in With Google</span>
                    </button>
                </div>
                <div className="w-full md:w-[82%] bg-[black] text-white p-3 rounded-md">
                    <button className='flex justify-center items-center gap-10'>
                        <FaGithub/> Sign in With Github
                    </button>
                </div>


            </div>

        </div>
    );
};

export default Register;
import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {

    const handleLogIn = () => {

    }

    return (
        <div className='w-full max-w-6xl mx-auto mt-10 mb-10 p-5 md:p-0'>
            
            <div className="flex flex-col justify-center items-center mx-auto w-full md:w-2/3 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleLogIn} className="">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="w-full text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" name="email" className="w-full border-gray-400 border-2 p-3 rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="w-full text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" name="password" className="w-full border-gray-400 border-2 p-3 rounded-md" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mb-6">Login</button>
                </form>

                <p className='font-semibold text-xl text-gray-700'>or Login With</p>

                <div className="w-[82%] bg-[#C54238] text-white p-3 rounded-md mt-6 mb-6">
                    <button className='flex justify-center items-center gap-10'>
                        <FaGoogle/> <span>Sign in With Google</span>
                    </button>
                </div>
                <div className="w-[82%] bg-[black] text-white p-3 rounded-md">
                    <button className='flex justify-center items-center gap-10'>
                        <FaGithub/> Sign in With Github
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Login;
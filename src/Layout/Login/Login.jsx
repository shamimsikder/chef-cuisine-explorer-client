import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';

const Login = () => {

    const {logInUser, signInWithGoogle, signInWithGithub} = useContext(AuthContext)
    const [error, setError] = useState("")

    const handleLogIn = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => { 
                console.error(error.message)
                setError("Enter valid email or password")
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => { 
                console.error(error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => { 
                console.error(error.message)
            })
    }


    return (
        <div className='w-full max-w-6xl mx-auto mt-10 mb-10 p-5 md:p-0'>
            
            <div className="flex flex-col mx-auto w-full md:w-[40%] bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleLogIn} className="">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="w-full text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" name="email" placeholder='Enter Your Email' className="w-full border-gray-400 border-2 p-3 rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="w-full text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" name="password" placeholder='Enter Your Password' className="w-full border-gray-400 border-2 p-3 rounded-md" />
                        {error && <span className='flex justify-center items-center gap-4 bg-[#FFECEC] px-3 py-2 text-red-500 rounded-md mt-1'>
                            <AiFillWarning></AiFillWarning>
                            <small>{error}</small>
                        </span>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mb-6">Login</button>
                </form>

                <p className='font-semibold text-xl text-gray-700 text-center'>or Login With</p>

                <div className="w-full bg-[#C54238] text-white p-3 rounded-md mt-6 mb-6">
                    <button onClick={handleGoogleSignIn} className='flex justify-center items-center mx-auto gap-6'>
                        <FaGoogle/> <span>Sign in With Google</span>
                    </button>
                </div>
                <div className="w-full bg-[black] text-white p-3 rounded-md">
                    <button onClick={handleGithubSignIn} className='flex justify-center mx-auto items-center gap-6'>
                        <FaGithub/> Sign in With Github
                    </button>
                </div>

                <p className='mb-2 mt-4 text-center'>Not a member? <Link to='/register' className='text-blue-500'>Sign Up</Link></p>

            </div>

        </div>
    );
};

export default Login;
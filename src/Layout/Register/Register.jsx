import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {createUser, signInWithGoogle, signInWithGithub, logOut, user} = useContext(AuthContext)
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/login'

    const handleRegister = (event) => {

        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        
        if(password === "" || email === ""){
            setError("A user cannot submit empty email and password fields")
            return
        }
        
        if(password.length < 6){
            setError("The password is less than 6 characters")
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                setError("")
                
                logOut()
                    .then()
                    .catch(error => {
                        console.error(error.message)
                    })

                
                updateProfile(loggedUser,{
                    displayName: name,
                    photoURL: photo,
                })
                            
                navigate(from, { replace: true }); 
            })

                
            .catch(error => { 
                console.error(error.message)
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
                        <input type="email" name="email" placeholder='Enter Your Email' className="w-full border-gray-400 border-2 p-3 rounded-md"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="w-full text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" name="password" placeholder='Enter Your Password' className="w-full border-gray-400 border-2 p-3 rounded-md"/>
                        {error && <span className='flex justify-center items-center gap-4 bg-[#FFECEC] px-3 py-2 text-red-500 rounded-md mt-1'>
                            <AiFillWarning></AiFillWarning>
                            <small>{error}</small>
                        </span>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mb-6">Register</button>
                </form>

                <p className='mb-2 mt-4 text-center'>Already have account? <Link to='/login' className='text-blue-500'>Login</Link></p>
                <p className='font-semibold text-xl text-center text-gray-700'>or Login With</p>

                <div className="w-full bg-[#C54238] text-white p-3 rounded-md mt-6 mb-6">
                    <button onClick={handleGoogleSignIn} className='flex justify-center mx-auto items-center gap-6'>
                        <FaGoogle/> <span>Sign in With Google</span>
                    </button>
                </div>
                <div className="w-full bg-[black] text-white p-3 rounded-md">
                    <button onClick={handleGithubSignIn} className='flex justify-center mx-auto items-center gap-6'>
                        <FaGithub/> Sign in With Github
                    </button>
                </div>


            </div>

        </div>
    );
};

export default Register;
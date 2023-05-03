import React from 'react';
import error from '../../assets/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-full max-w-7xl mx-auto mt-10 mb-10 p-5 md:p-0'>
            
            <img className='h-full md:h-[40%] w-full md:w-[40%] mx-auto' src={error} alt="" />
        
            <div className='text-center'>
                <button className="mt-6 px-6 py-3 bg-[#31B567] text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <Link to='/'>Back to Homepage</Link>
                </button>
            </div>
        
        </div>
    );
};

export default Error;
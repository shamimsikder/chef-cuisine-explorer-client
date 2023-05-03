import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='w-full max-w-7xl mx-auto bg-sky-50 rounded-md mt-10'>

            <div className='grid grid-cols-1 justify-center items-center gap-5 md:grid-cols-2'>

                <div className=' order-last md:order-first p-4'>
                    <h1 className='text-4xl font-semibold mb-3'>Experience the Authentic <br /> Taste of Italy</h1>
                    <p>Indulge in the rich flavors and exquisite dishes of Italian cuisine, made with the freshest ingredients and traditional recipes.</p>
                    <p className='mt-3'>Join us for a taste of la dolce vita.</p>
                    <button className="mt-6 px-6 py-3 bg-[#31B567] text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">Get Started</button>
                </div>
                <div>
                    <img className='rounded-md' src={banner} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Banner;
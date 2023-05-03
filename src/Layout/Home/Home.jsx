import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../../Components/ChefsCard/ChefsCard';
import WeAreBest from '../../Components/WeAreBest/WeAreBest';
import Review from '../../Components/Review/Review';

const Home = () => {

    const chefData = useLoaderData()

    return (
        <div className=''>

            <Banner></Banner>
            <h1 className='text-center mt-10 text-5xl font-semibold'>Meet Our Chefs</h1>
            <div className='w-full max-w-7xl mx-auto gap-5 grid grid-cols-1 md:grid-cols-3 p-5 md:p-0 mt-10 mb-10'>

                {chefData.map(data => <ChefsCard key={data.id} chefsData={data}></ChefsCard>)}
            
            </div>
            
            <div className=' p-5 md:p-0'>
                <WeAreBest></WeAreBest>
            </div>

            <div className='max-w-7xl mx-auto mb-10 mt-10 p-5 md:p-0'>
                <h2 className="text-5xl font-semibold text-center mb-5">Our Customer Reviews</h2>
                <Review></Review>
            </div>
            
        </div>
    );
};

export default Home;
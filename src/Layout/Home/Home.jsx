import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../../Components/ChefsCard/ChefsCard';

const Home = () => {

    const chefData = useLoaderData()

    console.log(chefData)

    return (
        <div className=''>
            <Banner></Banner>
            <h1 className='text-center mt-10 text-5xl font-semibold'>Our Chef's</h1>
            <div className='w-full max-w-7xl mx-auto gap-5 grid grid-cols-1 md:grid-cols-3 p-5 md:p-0'>

                {chefData.map(data => <ChefsCard key={data.id} chefsData={data}></ChefsCard>)}
            
            </div>
        </div>
    );
};

export default Home;
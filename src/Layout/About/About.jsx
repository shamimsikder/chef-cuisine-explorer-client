import React from 'react';
import Lottie from "lottie-react";
import chef from '../../assets/chef.json'
import restaurant from '../../assets/restaurant.json'

const About = () => {
   
    return (
        <div className='w-full max-w-7xl mx-auto mt-10 mb-10'>
           
           <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10'>

                <Lottie animationData={chef} loop={false} />

                <div className='text-center'>
                    <h1 className='text-5xl font-semibold mb-5'>About Chef's <span className='text-[#31B567]'>Cuisine</span> Explorer</h1>
                    <p className='text-gray-500'>Welcome to Chef's Cuisine Explorer, a platform dedicated to food lovers and culinary adventurers! Our mission is to help you discover and explore new cuisines, flavors, and cooking techniques from around the world, all in the comfort of your own kitchen</p>
                </div>

           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10'>

                <div className='text-center'>
                    <h1 className='text-5xl font-semibold mb-5'>Our <span className='text-[#31B567]'>Story</span></h1>
                    <p className=' text-gray-500'>Chef's Cuisine Explorer was founded in 2021 by a team of passionate chefs and food enthusiasts who wanted to share their knowledge and expertise with a wider audience. Our team has years of experience in the culinary industry, working in various restaurants, hotels, and catering services across the globe.
                    We believe that cooking and eating are more than just basic needs - they are an art form, a way of expressing ourselves, and a means of connecting with others. That's why we started Chef's Cuisine Explorer, to create a community of like-minded individuals who share our love of good food and great company.
                    </p>
                </div>

                <Lottie animationData={restaurant} loop={false} />

           </div>

           <h1 className='text-5xl text-center font-semibold mb-5'>Our <span className='text-[#31B567]'>Mission</span></h1>
            <p className=' text-gray-500'>Chef's Cuisine Explorer was founded in 2021 by a team of passionate chefs and food enthusiasts who wanted to share their knowledge and expertise with a wider audience. Our team has years of experience in the culinary industry, working in various restaurants, hotels, and catering services across the globe.
            We believe that cooking and eating are more than just basic needs - they are an art form, a way of expressing ourselves, and a means of connecting with others. That's why we started Chef's Cuisine Explorer, to create a community of like-minded individuals who share our love of good food and great company.
            </p>
            
        </div>
    );
};

export default About;
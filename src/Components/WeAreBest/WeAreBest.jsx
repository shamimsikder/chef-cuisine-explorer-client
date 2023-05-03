import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { GiChickenOven } from 'react-icons/gi';

const WeAreBest = () => {
    return (
        <div className="w-full max-w-7xl mx-auto my-12">
            <h1 className="text-4xl text-center font-bold mb-6">Why We Are The Best in Italian Cuisine</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="text-4xl text-[#31B567] mr-4">
                        <SiCodechef />
                    </div>
                    <div>
                        <h2 className="text-xl text-center mt-2 font-semibold mb-2">Best Chef</h2>
                        <p className="text-gray-700">Our team of experienced chefs is passionate about Italian cuisine and is dedicated to bringing authentic flavors to your table.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="text-4xl text-[#31B567] mr-4">
                        <GiChickenOven />
                    </div>
                    <div>
                        <h2 className="text-xl text-center mt-2 font-semibold mb-2">Italian Cuisine</h2>
                        <p className="text-gray-700">From fresh pasta to homemade gelato, our menu is a celebration of
                        everything that makes Italian cuisine so delicious and unique.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="text-4xl text-[#31B567] mr-4">
                        <FaUtensils />
                    </div>
                    <div>
                        <h2 className="text-xl text-center mt-2 font-semibold mb-2">Traditional Italian Recipes</h2>
                        <p className="text-gray-700">We use traditional Italian recipes that have been passed down for
                        generations, ensuring that each dish we serve is authentic and
                        bursting with flavor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAreBest;

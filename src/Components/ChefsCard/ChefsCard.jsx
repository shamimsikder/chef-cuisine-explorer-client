import React from 'react';
import { BsEye } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chefsData }) => {
    
    const { chefName, yearsOfExperience, numberOfRecipes, likes, chefPicture,id } = chefsData;

    return (
        <div className="flex flex-col justify-between border border-gray-300 rounded-md p-6 bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
           
            <div className="relative w-full h-72 rounded-md overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover object-center" src={chefPicture} />
            </div>
           
            <div className="mt-6">
            
                <h3 className="text-xl font-semibold">{chefName}</h3>
                
                <div className="flex items-center mt-2 text-gray-600">
                    <span className="mr-4"> <BsEye className="inline-block mr-1" /> {numberOfRecipes} Recipes </span>
                    <span> <AiFillLike className="inline-block mr-1" /> {likes} Likes </span>
                </div>
                
                <div className="flex items-center mt-4">
                    <span className="text-gray-600 font-semibold">Experience:</span>
                    <span className="ml-2">{yearsOfExperience} years</span>
                </div>
            
            </div>
            
            <button className="mt-6 px-6 py-3 bg-[#31B567] text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
               <Link to={`/chef-details/${id}`}> View Recipes</Link>
            </button>

        </div>
  );
};

export default ChefsCard;

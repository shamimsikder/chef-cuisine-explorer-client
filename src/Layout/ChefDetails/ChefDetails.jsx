import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaUtensils, FaClock } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import LazyLoad from 'react-lazy-load';
import RecipesCard from '../../Components/RecipesCard/RecipesCard';

const ChefDetails = () => {
  const { id } = useParams();
  const { chefName, chefPicture, recipes, yearsOfExperience, numberOfRecipes, likes, shortBio } = useLoaderData();

  return (
    <div className='max-w-7xl mx-auto my-10  p-5 md:p-0'>
        
        <div className='md:flex md:items-center mt-10 mb-10 md:gap-10'>
            
            <LazyLoad height={400} >
                <img className='w-full h-full object-cover rounded-lg shadow-lg' src={chefPicture} alt='' />
            </LazyLoad>
            
            <div className='mt-6 md:mt-0 md:w-1/2'>
            
                <h1 className='text-3xl font-bold mb-2'>{chefName}</h1>
                <p className='text-gray-500 text-sm mb-6'>{shortBio}</p>
            
                <div className='flex items-center text-gray-500 text-sm mb-6'>
                    <div className='flex items-center mr-6'>
                        <AiFillLike className='mr-1 text-green-500' />
                        {likes}
                    </div>
                    <div className='flex items-center mr-6'>
                        <FaClock className='mr-1 text-green-500' />
                        {yearsOfExperience}+ Years Experience
                    </div>
                    <div className='flex items-center mr-6'>
                       <FaUtensils className='mr-1 text-green-500'/> {numberOfRecipes} Recipes
                    </div>
            
                </div>
            
            </div>
        
        </div>
        <h1 className='text-center text-5xl font-semibold mt-10 mb-10'> Chef's Best Recipes</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {recipes.map(recipe => <RecipesCard key={recipe.__id} recipe={recipe}></RecipesCard>)}
        </div>

    </div>
  );
};

export default ChefDetails;

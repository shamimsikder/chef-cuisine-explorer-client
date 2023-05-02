import React from 'react';

const ChefsCard = ({chefsData}) => {

    const {chefName, yearsOfExperience, numberOfRecipes, likes, chefPicture} = chefsData
    
    return (
        <div className='mt-10 mb-5'>

            <div className='border-[1px] rounded-md border-[#31B567] p-2'>

                <img className='rounded-md h-[300px] w-[100%] object-cover object-center' src={chefPicture} alt="" />

                <h3 className='mt-2 text-xl font-semibold text-center'>{chefName}</h3>
                <h3>Experience: {yearsOfExperience}</h3>
                <h3>Numbers of Recipes: {numberOfRecipes}</h3>

                <p>Likes: {likes}</p>

                <button class="mt-3 px-4 py-2 bg-[#31B567] text-white rounded-md">View Recipes</button>

            </div>
            
        </div>
    );
};

export default ChefsCard;
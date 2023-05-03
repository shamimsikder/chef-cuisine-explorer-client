import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating-stars-component';


const RecipesCard = ({recipe}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        setIsFavorite(true);
        toast.success(`${recipe.name} is now your favorite recipe!`);
    };

    const {__id, name, image, ingredients, cookingMethod, rating} = recipe

    return (
        <div className='flex flex-col justify-between h-full gap-10 shadow-lg px-3 py-4'>
            <div className='w-full h-full '>
                <img className=' w-full h-96 rounded-md overflow-hidden' src={image} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <p className='font-semibold text-xl'>Ingredients:</p>
                {ingredients.slice(0,5).map(d => <li>{d}</li>)}
            </div>
            <div className='h-full'>
                <p>{cookingMethod}</p>
            </div>
            <div className='flex items-center justify-between'>
            
                <Rating
                    count={5}
                    value={rating}
                    size={20}
                    emptyIcon={<FaRegStar size={20} />}
                    halfIcon={<FaStarHalfAlt size={20} />}
                    filledIcon={<FaStar size={20} />}
                    activeColor="#FFC107"
                    edit={false}
                />

                <p className='text-lg font-semibold'>{rating} <small className='font-normal text-gray-700'>out of</small> 5.0</p>
                                
            </div>
            
            <div className='w-full'>
                <button
                    onClick={handleFavorite}
                    disabled={isFavorite}
                    className={`w-full ${
                    isFavorite ? 'bg-gray-400 cursor-default' : 'bg-green-500'
                    } hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4`}
                >
                <FaHeart className="inline-block mr-2" />
                {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
                </button>
            </div>
      
        <ToastContainer />
        </div>
    );
};

export default RecipesCard;
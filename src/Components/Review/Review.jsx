import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating-stars-component';
import moment from 'moment';
import './Review.css'


const Review = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {

        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <div className="slick-prev" />,
    nextArrow: <div className="slick-next" />
        };
    
      return (
        <div className="py-5 bg-[#F0F9FF]">
          <div className="w-full max-w-6xl mx-auto px-8 py-2 md:px-12">
            <div className="">
              <Slider {...settings} className=''>
                {reviews.map((review) => (
                  
                    <div key={review.id} className="px-4 py-8">
                        <div className="bg-white shadow-lg rounded-lg px-6 py-4">
                            <div className="flex justify-between items-center">
                            
                                <div className='flex flex-col'>
                                    <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                                    <p className="text-gray-600">{moment(review.date).format("MMMM D YYYY")}</p>
                                </div>

                                <div className='flex gap-5'>
                                <Rating
                                    count={5}
                                    value={review.rating}
                                    size={20}
                                    emptyIcon={<FaRegStar size={20} />}
                                    halfIcon={<FaStarHalfAlt size={20} />}
                                    filledIcon={<FaStar size={20} />}
                                    activeColor="#FFC107"
                                    edit={false}
                                />
                                </div>

                            </div>
                            <p className="mt-4 text-base text-gray-600">{review.comment}</p>

                        </div>
                    </div>

                ))}
              </Slider>
            </div>
          </div>
        </div>
    );
};

export default Review;
import React from 'react';
import { IoStar } from "react-icons/io5";
const ReviewCard = ({data}) => {
    const { name, expertise, rating, reviews, testimonial, image } = data;
    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-5 flex gap-4 items-center hover:shadow-lg transition scale-90 md:scale-100">
      
            <img  src={image} alt={name} className="w-16 h-16 rounded-full object-cover border"/>

            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

                <p className="text-sm text-teal-600 font-medium">{expertise}</p>

                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                    <span className="text-yellow-500"><IoStar /></span>
                    <span className="font-semibold mt-1">{rating}</span>
                    <span className="text-gray-400 mt-1">({reviews} reviews)</span>
                </div>

                <p className="text-sm text-gray-500 italic mt-2">“{testimonial}”</p>
            </div>
        </div>
    );
};

export default ReviewCard;
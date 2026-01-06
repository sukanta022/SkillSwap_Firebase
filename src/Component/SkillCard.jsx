import React from 'react';
import { FaStar,FaRegUserCircle  } from "react-icons/fa";
import { Link } from 'react-router';
const SkillCard = ({skill}) => {
    console.log(skill)
    const {skillName, providerName, price, rating, description, image, skillId} = skill
    return (
        <div className='w-[350px] shadow-lg rounded-lg scale-90 md:scale-100 hover:scale-105 transition ease-in-out'>
            <div
                className="h-[250px] rounded-t-lg bg-cover bg-center flex justify-end p-4"
                style={{
                    backgroundImage: `url(${image})`
                }}
            >
                <div className='bg-white p-1 w-fit h-fit font-semibold text-[#001931] text-[15px] rounded-lg'>${price}/hr</div>
            </div>

            <div className='p-5 space-y-3'>
                <div className='text-xl flex justify-start items-center gap-1'> 
                    <p className='text-[#FACC15]'><FaStar /></p>
                    <p className='mt-1'>{rating}</p>
                </div>

                <h2 className='text-2xl text-[#001931] font-bold'>{skillName}</h2>

                <p className='text-[#949FAF]'>{description}</p>

                <div className='mt-5 flex justify-between items-center'>
                    <p className='flex gap-1 font-semibold text-[16px] items-center text-[#001931]'><FaRegUserCircle /> {providerName}</p>

                    <Link to={`/skillDetails/${skillId}`} onClick={() => window.scrollTo(0, 0)} className='text-[#0D9488] font-semibold hover:underline'>View Details</Link>
                </div>
            </div>

            
        </div>
    );
};

export default SkillCard;
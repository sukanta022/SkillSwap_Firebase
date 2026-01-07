import React, { useState } from 'react';
import { useParams } from 'react-router';
import useSkills from '../hooks/useSkills';
import { FaStar,FaRegUserCircle  } from "react-icons/fa";
import BookSessionModal from '../Component/BookSessionModal ';
import ErrorPage from "./ErrorPage";
const SkillDetails = () => {
    const {id} = useParams()
    const {skills, loading} = useSkills()
    const [openModal, setOpenModal] = useState(false);
    const data = skills.find(skill => skill.skillId == id)

    if(!data){
        return <ErrorPage></ErrorPage>
    }
    
    if(loading){
        return <p>Loading...</p>
    }
    const {skillName, providerName, price, rating, full_descriptions, image, category, slotsAvailable, providerEmail} = data
    
    return (
        <div className='w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center py-20 gap-10 '>
            <div className='w-full md:w-1/2'>
                <img src={image} className='w-full shadow-md rounded h-[300px] md:h-[558px] animate__animated animate__backInLeft' alt="" />
            </div>

            <div className='w-full md:w-1/2 space-y-3 animate__animated animate__backInRight'>
                <h1 className='text-4xl text-[#001931] font-bold'>{skillName}</h1>
                <p className='text-[#131313]/80'>By: {providerName}</p>
                <p className='text-xl border-t-2 border-b-2 border-gray-300 py-3'>{category}</p>
                <p className='mt-4 text-[#131313]/70 border-b-2 border-gray-300 pb-4'><span className='font-bold'>Details: </span>{full_descriptions}</p>

                <div className='space-y-2 mt-4'>
                    <p className='flex space-x-8'><span className='text-[#131313]/70'>Ratings : </span> <span className='flex items-center gap-2 font-semibold'><FaStar className='text-[#FACC15] text-xl'/> {rating}</span></p>
                    <p className='flex space-x-20'><span className='text-[#131313]/70'>price : </span> <span className='font-semibold'>${price}</span></p>
                    <p className='flex space-x-4'><span className='text-[#131313]/70'>Slot available : </span> <span className='font-semibold'>{slotsAvailable}</span></p>
                    <p className='flex space-x-18'><span className='text-[#131313]/70'>E-mail : </span> <span className='font-semibold'>{providerEmail}</span></p>
                </div>

                <div className='flex justify-center lg:justify-start items-center'>
                    <button onClick={() => setOpenModal(true)} className="btn mt-3 bg-[#0D9488]/90 rounded-md text-white">
                        Book session
                    </button>
                </div>
            </div>
            <BookSessionModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                skillName={skillName}
                providerName={providerName}
            />
        </div>
    );
};

export default SkillDetails;
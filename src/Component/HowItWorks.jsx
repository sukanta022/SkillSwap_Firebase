import React from 'react';
import { BiSearch } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { AiOutlineRise } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
const HowItWorks = () => {
    return (
        <div className='bg-[#F8FAFC] py-15 lg:py-25 w-11/12 mx-auto'>
            <div className='text-center space-y-2 mb-5'>
                <h2 className='text-3xl font-bold text-[#001931]'>How It Works</h2>
                <p className='text-[#64748B]'>Start your learning journey in four simple steps</p>
            </div>

            <div className='flex flex-col  md:flex-row  justify-center items-center ,mt-10 lg:mt-15 gap-10 lg:gap-15'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='p-2 shadow-lg text-3xl rounded-lg w-fit bg-white text-[#0D9488]'><BiSearch /></div>
                    <p className='text-[#001931] font-semibold text-xl'>1. Browse Skills</p>
                    <p className='text-[#64748B] text-center'>Explore hundreds of local skills and find what interests you mos</p>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='p-2 shadow-lg text-3xl rounded-lg w-fit bg-white text-[#0D9488]'><GrGroup /></div>
                    <p className='text-[#001931] font-semibold text-xl'>2. Connect</p>
                    <p className='text-[#64748B] text-center'>View provider profiles, read reviews, and chat before booking.</p>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='p-2 shadow-lg text-3xl rounded-lg w-fit bg-white text-[#0D9488]'><MdOutlineDateRange /></div>
                    <p className='text-[#001931] font-semibold text-xl'>3. Book Session</p>
                    <p className='text-[#64748B] text-center'>Choose a time that works for you and securely book your session.</p>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='p-2 shadow-lg text-3xl rounded-lg w-fit bg-white text-[#0D9488]'><AiOutlineRise /></div>
                    <p className='text-[#001931] font-semibold text-xl'>4. Learn & Grow</p>
                    <p className='text-[#64748B] text-center'>Master new skills, meet new people, and grow your potential.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
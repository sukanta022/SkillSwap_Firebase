import React from 'react';
import useSkills from '../hooks/useSkills';
import SkillCard from './SkillCard';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';
import { MdArrowForwardIos } from "react-icons/md";
const PopularSkills = () => {
    const {skills} = useSkills()
  
    const data = skills.filter(skill => Number(skill.rating)>=4.7)
    console.log(data.length)
    return (
        <div className='w-11/12 mx-auto py-15'>
            <h1 className='text-3xl mb-3 md:mb-1 text-center md:text-left text-[#001931] font-bold'>Popular Skills</h1>
            <div className='flex flex-col gap-2 md:flex-row justify-center md:justify-between items-center'>
                <p className='text-center md:text-left'>Discover what your community is learning today</p>
                <Link className='text-xl text-[#0D9488] flex gap-1 items-center'>View all categories <MdArrowForwardIos /></Link>
            </div>
            <Marquee className='flex gap-25 mt-8' pauseOnHover={true} speed={60}>
                <div className='flex gap-25'>
                {
                    data.map(skill => <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                }
                </div>
            </Marquee>
            
            
            
        </div>
    );
};

export default PopularSkills;
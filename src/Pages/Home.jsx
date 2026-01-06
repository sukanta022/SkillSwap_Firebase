import React from 'react';
import Banner from '../Component/Banner';
import SkillCard from '../Component/SkillCard';
import PopularSkills from '../Component/PopularSkills';
import Marquee from 'react-fast-marquee';
import HowItWorks from '../Component/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <PopularSkills></PopularSkills>

            <HowItWorks></HowItWorks>
            
            
        </div>
    );
};

export default Home;
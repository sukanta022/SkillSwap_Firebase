import React from 'react';
import Banner from '../Component/Banner';
import PopularSkills from '../Component/PopularSkills';
import HowItWorks from '../Component/HowItWorks';
import Review from '../Component/Review';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            
            <PopularSkills></PopularSkills>

            <HowItWorks></HowItWorks>
            
            <Review></Review>
            
        </div>
    );
};

export default Home;
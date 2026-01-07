import React from 'react';
import useReview from '../hooks/useReview';
import ReviewCard from './ReviewCard';
import Marquee from 'react-fast-marquee';

const Review = () => {
    const {review} = useReview()
    return (
        <div className='w-11/12 mx-auto py-15'>
            <h1 className='text-3xl mb-3 md:mb-1 text-center md:text-left text-[#001931] font-bold'>Popular Skills</h1>

            <Marquee className='flex gap-25 py-8' pauseOnHover={true} speed={70}>
                <div className='flex gap-25'>
                {
                    review.map(data => <ReviewCard data={data} key={data.id}></ReviewCard>)
                }
                </div>
            </Marquee>

        </div>
        
    );
};

export default Review;
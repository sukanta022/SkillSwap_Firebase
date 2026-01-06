import React from 'react';
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div
  className="w-full h-[420px] sm:h-[480px] lg:h-[600px] bg-center bg-cover flex items-center"
  style={{
    backgroundImage: `
      linear-gradient(to right, #0F172AFF 0%, #0F172ACC 50%, #0F172A00 120%),
      url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop')
    `
  }}
>
  <div className="space-y-4 w-11/12 sm:w-10/12 mx-auto flex flex-col items-start animate__animated animate__lightSpeedInLeft">
    
    <div className="text-[#5EEAD4] flex items-center gap-2 rounded-lg bg-[#14B8A6]/20 px-3 py-1 border border-[#14B8A6]/30 text-sm sm:text-base">
      <GoDotFill />
      New skills added daily
    </div>

    <div className="space-y-3">
      <p className="text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
        Learn, Share & Trade <br />
        Skills in Your <span className="text-[#2DD4BF]">Local <br /> Community</span>
      </p>

      <p className="text-[#CBD5E1] text-sm sm:text-base lg:text-lg max-w-xl">
        Connect with neighbors to master guitar, learn coding, practice yoga, or share your own expertise.
      </p>

      <Link className="btn  gap-2 mt-4 p-5 bg-[#0D9488] text-white sm:text-lg font-semibold rounded-full hover:bg-[#0F766E] transition border-2 border-[#0D9488]">
        Explore Skills <FaArrowRightLong />
      </Link>
    </div>

  </div>
</div>


    );
};

export default Banner;
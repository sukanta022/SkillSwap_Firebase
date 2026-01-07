import React, { useContext, useState } from 'react';

import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthContext';
import ProfileUpdateModal from '../Component/ProfileUpdateModal';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0D9488]/20 to-[#001931]/20 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 text-center">

       
        <div className="flex justify-center">
          <img
            src={user.photoURL || "https://i.ibb.co/2kR7cVg/user.png"}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-[#0D9488] object-cover"
          />
        </div>

        
        <h2 className="mt-4 text-2xl font-bold text-[#001931]">
          {user.displayName || "No Name"}
        </h2>

        <p className="text-[#6B7280] mt-1">
          {user.email}
        </p>

        
        <button onClick={() => setOpen(true)} className="mt-6 w-full flex items-center justify-center gap-2 btn bg-[#0D9488] text-white hover:bg-[#0D9488]/90 rounded-full">
          <FaUserEdit />
          Update Profile
        </button>

        

        
      </div>
      <ProfileUpdateModal  open={open} onClose={() => setOpen(false)}/>
    </div>
  );
};

export default Profile;

import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';

const ProfileUpdateModal = ({ open, onClose}) => {
    const {user,updateUserProfile} = use(AuthContext)
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    if (!open) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = {
            displayName: name,
            photoURL
        };

        updateUserProfile(user, updatedData)
        .then(async () => {
            await user.reload();     // 🔥 refresh firebase user
            toast.success("Profile updated successfully");
            onClose();
        })
        .catch((error) => console.log(error.message))
        
    };

  return (
    <dialog className="modal modal-open">
      {/* Glass background */}
      <div className="modal-box bg-white/30 backdrop-blur-md shadow-md rounded-2xl border border-white/20">

        <h3 className="font-bold text-xl text-[#001931] mb-4">
          Update Profile
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)}
            className="input w-full bg-white/80 text-[#001931]" />

          
          <input type="text" placeholder="Photo URL" onChange={(e) => setPhotoURL(e.target.value)}
            className="input w-full bg-white/80 text-[#001931]"/>

          <div className="modal-action">
            <button type="button" onClick={onClose} className="btn btn-outline border-[#001931] text-[#001931]">
              Cancel
            </button>

            <button type="submit" className="btn bg-[#0D9488] text-white hover:bg-[#0D9488]/90">
              Update
            </button>
          </div>

        </form>
      </div>
    </dialog>
  );
};

export default ProfileUpdateModal;

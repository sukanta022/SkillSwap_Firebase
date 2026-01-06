import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookSessionModal = ({ open, onClose }) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Successfully booked session')
    setName('');
    setEmail('');
  };
  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Book Session</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="input w-full bg-white/80 text-[#001931]"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full bg-white/80 text-[#001931]"
          />

          <div className="modal-action">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn bg-[#0D9488] text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default BookSessionModal;

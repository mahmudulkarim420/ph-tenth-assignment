import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditProfile = () => {
  const { user, updateProfileData } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfileData({ displayName: name, photoURL });
      toast.success('Profile updated successfully!');
      navigate('/profile');
    } catch (err) {
      toast.error('Something went wrong!');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-10">
      <div
        className="  bg-white/10 backdrop-blur-lg border border-white/20 
              rounded-xl p-6 text-white shadow-lg
              transition-all duration-300 
              hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 
              hover:bg-white/20 hover:-translate-y-2   w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col items-center">
            <img
              src={photoURL || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 mb-2"
            />
            <input
              type="text"
              placeholder="Photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus-within:ring-2 focus-within:ring-blue-500"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus-within:ring-2 focus-within:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg text-white focus:outline-none focus-within:ring-2 focus-within:ring-blue-500"
            value={user?.email || ''}
            readOnly
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>

        <Link
          to="/profile"
          className="block mt-4 text-center text-white hover:underline"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;

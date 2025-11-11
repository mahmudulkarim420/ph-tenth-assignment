import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">You are not logged in!</h1>
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="  bg-white/10 backdrop-blur-lg border border-white/20 
              rounded-xl p-6 text-white shadow-lg
              transition-all duration-300 
              hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 
              hover:bg-white/20 hover:-translate-y-2 w-full max-w-md text-center">
        <img
          src={user.photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
        />
        <h2 className="text-2xl font-bold mt-4">{user.displayName || 'User'}</h2>
        <p className="text-white mt-2">{user.email}</p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/my-books"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            My Books
          </Link>
          <Link
            to="/edit-profile"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

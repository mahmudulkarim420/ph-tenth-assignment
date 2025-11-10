import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { createUser, logOut, signInWithGoogle } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must be at least 6 characters long, include one uppercase and one lowercase letter.'
      );
      return;
    }

    try {
      const result = await createUser(email, password);

      // Update profile
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo || 'https://via.placeholder.com/40',
      });

      await logOut();

      toast.success('Registration Successful! Please login now.');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithGoogle();
      toast.success('Google Login Successful!');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] p-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl text-white">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
                required
                autoComplete="new-password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <p className="text-sm mt-1 opacity-80">
              ● At least 6 characters
              <br />● One uppercase letter
              <br />● One lowercase letter
            </p>
            <button
              type="submit"
              className="w-full py-3 bg-black/40 hover:bg-black/70 rounded-lg text-lg font-semibold duration-200"
            >
              Register
            </button>
          </form>
          <div className="my-6 text-center">OR</div>
          <button
            onClick={handleGoogleRegister}
            className="w-full py-3 bg-white text-black rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-gray-200 duration-200"
          >
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>
          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;

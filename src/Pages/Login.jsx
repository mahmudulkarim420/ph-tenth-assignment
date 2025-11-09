import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast.success('Login Successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Google Login Successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Login to BooksHaven</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
            autoComplete="current-password"
          />
          <p className="text-sm mt-1 opacity-80">Forget Password?</p>
          <button
            type="submit"
            className="w-full py-3 bg-black/40 hover:bg-black/70 rounded-lg text-lg font-semibold duration-200"
          >
            Login
          </button>
        </form>
        <div className="my-6 text-center">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-white text-black rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-gray-200 duration-200"
        >
          <FcGoogle className="text-2xl" /> Continue with Google
        </button>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/register" className="underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
import React, { useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../Providers/AuthProvider';

const AddBook = () => {
  const { user } = useContext(AuthContext); // ✅ get logged-in user
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    rating: '',
    summary: '',
    coverImage: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Validate required fields

    if (
      !formData.title ||
      !formData.author ||
      !formData.genre ||
      !formData.rating ||
      !formData.summary ||
      !formData.coverImage
    ) {
      return toast.error('All fields are required!');
    }

    try {
      setLoading(true); // ✅ The URL and POST method are correct, matching the backend route: /books
      await axios.post(
        'https://books-haven-prem-server-kappa.vercel.app/books',
        {
          ...formData,
          rating: Number(formData.rating), // Convert rating to number
          userId: user?.uid, // Add logged-in user's ID
        }
      );
      toast.success('Book added successfully!'); // Reset form after success
      setFormData({
        title: '',
        author: '',
        genre: '',
        rating: '',
        summary: '',
        coverImage: '',
      });
    } catch (err) {
      console.error('Add book error:', err); // Display a more helpful error if available, otherwise use generic
      const errorMessage = err.response?.data?.message || 'Failed to add book!';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {' '}
      <div
        className="my-10 bg-white/10 backdrop-blur-lg border border-white/20 
 rounded-xl p-6 transition-all duration-300 
hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 
              hover:bg-white/20 hover:-translate-y-2  w-full max-w-lg text-white shadow-lg"
      >
        {' '}
        <h2 className="text-3xl font-bold mb-6 text-center">Add a New Book</h2>
        {' '}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {' '}
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
          {' '}
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
          {' '}
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
          {' '}
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
          {' '}
          <input
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            value={formData.coverImage}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
          {' '}
          <textarea
            name="summary"
            placeholder="Book Summary"
            value={formData.summary}
            onChange={handleChange}
            rows="4"
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          ></textarea>
          {' '}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition hover:cursor-pointer"
          >
            {loading ? 'Adding...' : 'Add Book'}
          </button>
        </form>
      </div>
      {' '}
    </div>
  );
};

export default AddBook;

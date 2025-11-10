import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../Components/Banner';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Axios GET request to your server
    axios.get('http://localhost:3000/books') // server route jekhane MongoDB theke data fetch hocche
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] min-h-screen'>
      <Banner />
      
      <h2 className="text-center mt-8 text-3xl font-bold text-white">Our Books</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {books.map(book => (
          <div key={book._id} className="book-card bg-white border rounded-lg shadow-lg p-4 hover:scale-105 transform transition-all">
            <img src={book.coverImage} alt={book.title} className="w-full h-64 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
            <p className="text-sm text-gray-600"><strong>Author:</strong> {book.author}</p>
            <p className="text-sm text-gray-600"><strong>Genre:</strong> {book.genre}</p>
            <p className="text-sm text-yellow-500"><strong>Rating:</strong> {book.rating}/5</p>
            <p className="text-sm mt-1">{book.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

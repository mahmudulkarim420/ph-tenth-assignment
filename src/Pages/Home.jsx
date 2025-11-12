import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import Categories from '../Components/Categories';
import WhyUs from '../Components/WhyUs';
import Testimonials from '../Components/Testimonials';
import Newsletter from '../Components/Newsletter';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/books')
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Banner />

      <h2 className="text-center mt-8 text-3xl font-bold text-white">
        Our Books
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {books.slice(0, 6).map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-64 object-cover rounded-md"
            />

            <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
            <p className="text-sm text-gray-600">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Genre:</strong> {book.genre}
            </p>
            <p className="text-sm text-yellow-500">
              <strong>Rating:</strong> {book.rating}/5
            </p>
            <p className="text-sm mt-1">{book.summary}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/all-books">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition hover:cursor-pointer">
            Read More Books
          </button>
        </Link>
      </div>

      <Categories />
      <WhyUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;

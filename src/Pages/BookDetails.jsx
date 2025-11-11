import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Components/Spinner';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl font-semibold">Book not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-10">
      <div
        className="max-w-4xl mx-auto  bg-white/10 backdrop-blur-lg border border-white/20 
              rounded-xl p-6 text-white shadow-lg
              transition-all duration-300 
              hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 
              hover:bg-white/20 hover:-translate-y-2 flex flex-col md:flex-row gap-6"
      >
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full md:w-1/3 h-auto rounded-xl object-cover border-4 border-blue-500"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{book.title}</h2>
          <p className="text-gray-300 mt-2">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-300 mt-1">
            <strong>Genre:</strong> {book.genre}
          </p>
          <p className="text-yellow-400 mt-1">
            <strong>Rating:</strong> {book.rating}/5
          </p>
          <p className="mt-4 text-gray-200">{book.summary}</p>

          <Link
            to="/all-books"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Back to All Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

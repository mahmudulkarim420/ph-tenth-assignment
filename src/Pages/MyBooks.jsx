import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    if (!user?.uid) return;
    try {
      const res = await axios.get(
        `https://books-haven-prem-server-kappa.vercel.app/my-books/${user.uid}`
      );
      setBooks(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch your books!');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://books-haven-prem-server-kappa.vercel.app/books/${id}`
      );
      toast.success('Book deleted!');
      setBooks(books.filter((book) => book._id !== id));
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete book!');
    }
  };

  const handleGoToUpdate = (id) => {
    navigate(`/update-book/${id}`);
  };

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">My Books</h2>
      {books.length === 0 ? (
        <p className="text-white">You haven't added any books yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-white"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-2 font-bold">{book.title}</h3>
              <p className="text-sm">{book.summary}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleDelete(book._id)}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleGoToUpdate(book._id)}
                  className="px-3 py-1 bg-green-600 rounded hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;

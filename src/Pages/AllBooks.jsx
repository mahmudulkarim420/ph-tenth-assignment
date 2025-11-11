import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books") // backend endpoint
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-white">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        All Books
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/10 backdrop-blur-lg text-white rounded-lg">
          <thead>
            <tr className="border-b border-white/30">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Genre</th>
              <th className="px-4 py-2 text-left">Rating</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="hover:bg-white/20 transition">
                <td className="px-4 py-2">{index + 1}</td>
                
                {/* Title + Image */}
                <td className="px-4 py-2 flex items-center gap-3">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <span>{book.title}</span>
                </td>
                
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.genre}</td>
                <td className="px-4 py-2">{book.rating}/5</td>
                <td className="px-4 py-2">
                  <Link to={`/book/${book._id}`}>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;

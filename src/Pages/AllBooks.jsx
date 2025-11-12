import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://books-haven-prem-server-kappa.vercel.app/books")
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
    return <Spinner />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        All Books
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full bg-white/10 backdrop-blur-lg text-white rounded-lg">
          <thead>
            <tr className="border-b border-white/30">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left hidden sm:table-cell">Author</th>
              <th className="px-4 py-2 text-left hidden md:table-cell">Genre</th>
              <th className="px-4 py-2 text-left hidden lg:table-cell">Rating</th>
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
                  <span className="text-sm sm:text-base">{book.title}</span>
                </td>

                <td className="px-4 py-2 hidden sm:table-cell text-sm sm:text-base">{book.author}</td>
                <td className="px-4 py-2 hidden md:table-cell text-sm md:text-base">{book.genre}</td>
                <td className="px-4 py-2 hidden lg:table-cell text-sm lg:text-base">{book.rating}/5</td>

                <td className="px-4 py-4">
                  <Link to={`/book/${book._id}`}>
                    <button className="w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition whitespace-nowrap hover:cursor-pointer">
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

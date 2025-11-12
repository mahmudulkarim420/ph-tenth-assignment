import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-hot-toast';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // Fetch book data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://books-haven-prem-server-kappa.vercel.app/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  // Fetch comments + real-time
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`https://books-haven-prem-server-kappa.vercel.app/comments/${id}`);
        setComments(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComments();
    const interval = setInterval(fetchComments, 5000);
    return () => clearInterval(interval);
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return toast.error('Comment cannot be empty!');

    const commentData = {
      bookId: id,
      userName: user?.displayName || 'Anonymous',
      photoURL: user?.photoURL || '',
      comment: newComment,
    };

    try {
      await axios.post('https://books-haven-prem-server-kappa.vercel.app/comments', commentData);
      setNewComment('');
      toast.success('Comment added!');
      // Optional: immediately refresh comments
      const res = await axios.get(`https://books-haven-prem-server-kappa.vercel.app/comments/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to add comment!');
    }
  };

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
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 
                      rounded-xl p-6 shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full md:w-1/3 h-auto rounded-xl object-cover border-4 border-blue-500"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{book.title}</h2>
          <p className="text-gray-300 mt-2"><strong>Author:</strong> {book.author}</p>
          <p className="text-gray-300 mt-1"><strong>Genre:</strong> {book.genre}</p>
          <p className="text-yellow-400 mt-1"><strong>Rating:</strong> {book.rating}/5</p>
          <p className="mt-4 text-gray-200">{book.summary}</p>

          <Link
            to="/all-books"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Back to All Books
          </Link>
        </div>
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl mx-auto mt-10 bg-white/10 p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>

        {user ? (
          <form onSubmit={handleAddComment} className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-3 rounded-lg border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black transition duration-200"
            />
            <button
              type="submit"
              className="mt-3 px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
            >
              Add Comment
            </button>
          </form>
        ) : (
          <p className="mb-6 text-gray-300">Login to add a comment.</p>
        )}

        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <div className="space-y-4">
            {comments.map((cmt) => (
              <div key={cmt._id} className="bg-white/20 p-3 rounded-lg flex items-start gap-3">
                {cmt.photoURL && (
                  <img src={cmt.photoURL} alt={cmt.userName} className="w-10 h-10 rounded-full" />
                )}
                <div>
                  <p className="font-semibold">{cmt.userName}</p>
                  <p className="text-gray-300">{cmt.comment}</p>
                  <p className="text-xs text-gray-400">{new Date(cmt.createdAt).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;

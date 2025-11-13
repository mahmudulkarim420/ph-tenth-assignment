import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    summary: "",
    coverImage: "",
  });

  const [loading, setLoading] = useState(false);

  // Fetch current book data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://books-haven-prem-server-kappa.vercel.app/books/${id}`);
        const { _id, ...bookData } = res.data; // Remove _id to prevent MongoDB update issue
        setFormData(bookData);
      } catch (err) {
        console.error("Fetch book error:", err);
        toast.error("Failed to fetch book info");
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { _id, ...dataToUpdate } = formData; // just in case
      await axios.put(`https://books-haven-prem-server-kappa.vercel.app/books/${id}`, {
        ...dataToUpdate,
        rating: Number(formData.rating),
      });
      toast.success("Book updated successfully!");
      navigate("/my-books"); // MyBooks page এ redirect
    } catch (err) {
      console.error("Update book error:", err);
      const errorMessage = err.response?.data?.message || "Failed to update book";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-full max-w-lg text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Update Book</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
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
          <input
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            value={formData.coverImage}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          />
          <textarea
            name="summary"
            placeholder="Book Summary"
            value={formData.summary}
            onChange={handleChange}
            rows="4"
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white border border-white/30 focus:border-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition hover:cursor-pointer"
          >
            {loading ? "Updating..." : "Update Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;

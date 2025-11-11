const Newsletter = () => {
  return (
    <div
      className="max-w-6xl mx-auto bg-white/10 p-15 rounded-2xl shadow-xl mt-24 text-center backdrop-blur-lg mb-10
                    transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
      <p className="text-white/80 mt-2">
        Get book updates directly to your inbox.
      </p>

      <div className="flex gap-3 mt-6 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-lg w-64 text-white outline focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

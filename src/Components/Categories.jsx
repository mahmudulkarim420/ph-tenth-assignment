const Categories = () => {
  const data = [
    { name: "Fantasy", img: "https://i.ibb.co/PM3pFpp/fantasy.jpg" },
    { name: "Romance", img: "https://i.ibb.co/mHbcNZ8/romance.jpg" },
    { name: "Thriller", img: "https://i.ibb.co/JzFNL1v/thriller.jpg" },
    { name: "Sci-Fi", img: "https://i.ibb.co/Bqp6qHQ/scifi.jpg" },
    { name: "Horror", img: "https://i.ibb.co/LPtJ5Nh/horror.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((cat, i) => (
          <div key={i} className="relative group cursor-pointer">
            <img
              src={cat.img}
              className="rounded-xl h-40 w-full object-cover group-hover:brightness-75 transition"
            />
            <p className="absolute bottom-3 left-3 text-white font-semibold text-lg">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

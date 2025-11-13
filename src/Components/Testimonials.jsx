const Testimonials = () => {
  const people = [
    { name: 'Aarav', text: 'This website helped me discover amazing books!' },
    { name: 'Meher', text: 'Very easy to use and super clean UI.' },
    { name: 'Rahim', text: 'Loved the smooth experience & beautiful design!' },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 text-center">
      <h2 className="text-3xl font-bold text-white">What Readers Say</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8 hover:cursor-pointer">
        {people.map((p, i) => (
          <div
            key={i}
            className="
              bg-white/10 text-white p-10 rounded-xl backdrop-blur-lg shadow-lg
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30
              hover:bg-white/20 hover:-translate-y-2">
            <p>"{p.text}"</p>
            <h3 className="mt-3 font-semibold">{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

const WhyUs = () => {
  const items = [
    {
      title: "Huge Collection",
      desc: "We provide thousands of books across every genre.",
      icon: "📚"
    },
    {
      title: "User Friendly",
      desc: "Easy navigation with a clean and modern UI.",
      icon: "✨"
    },
    {
      title: "Secure Account",
      desc: "Login/Register securely with Firebase.",
      icon: "🔐"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center mt-20 px-4">
      <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 hover:cursor-pointer">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              bg-white/10 backdrop-blur-lg border border-white/20 
              rounded-xl p-6 text-white shadow-lg
              transition-all duration-300 
              hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 
              hover:bg-white/20 hover:-translate-y-2
            "
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;

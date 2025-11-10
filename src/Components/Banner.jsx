import { useState, useEffect, useRef } from "react";

const Banner = () => {
  const slides = [
    "https://i.ibb.co/WW6fmdJr/photo-1592496431122-2349e0fbc666-ixlib-rb-4-1.jpg",
    "https://i.ibb.co/wNSDq56T/photo-1589829085413-56de8ae18c73-ixlib-rb-4-1.jpg",
    "https://i.ibb.co.com/YFFXzJBy/photo-1512820790803-83ca734da794-ixlib-rb-4-1.jpg",
    "https://i.ibb.co/twMhr7kX/photo-1693917001031-13e513507793-ixlib-rb-4-1.jpg",
    "https://i.ibb.co/SDNh4ZpC/photo-1644229949318-618cb5bd06fa-ixlib-rb-4-1.jpg",
    "https://i.ibb.co/Z1ptX4kw/photo-1635469709056-0ebc44906d9b-ixlib-rb-4-1.jpg",
    "https://i.ibb.co.com/m5r8vNzL/photo-1676282825995-1ef6ac3e7241-ixlib-rb-4-1.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef(null);
  const totalSlides = slides.length;

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] py-16">

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Explore & Discover
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              Your Favorite Books
            </span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Browse thousands of books, find reviews, and save your favorites.
            Your reading journey starts here!
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/all-books"
              className="px-6 py-3 rounded-xl font-semibold text-white 
                 bg-gradient-to-r from-blue-500 to-indigo-600
                 hover:from-indigo-600 hover:to-blue-500 
                 shadow-md hover:shadow-xl transition-all duration-300"
            >
              Explore Books
            </a>

            <a
              href="/register"
              className="px-6 py-3 rounded-xl font-semibold 
                 bg-white text-gray-800 border border-gray-300
                 hover:bg-gray-100 shadow-md hover:shadow-xl
                 transition-all duration-300"
            >
              Create Account
            </a>
          </div>
        </div>

        {/* RIGHT SLIDE */}
        <div
          className="flex justify-center overflow-hidden w-full max-w-md rounded-2xl drop-shadow-xl relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            ref={slideRef}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0 rounded-2xl"
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

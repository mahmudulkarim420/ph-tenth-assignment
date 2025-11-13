import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Categories = () => {
  const data = [
    {
      name: 'Fantasy',
      img: 'https://i.ibb.co.com/C5HRggjT/photo-1711185892790-4cabb6701cb8-ixlib-rb-4-1.jpg',
    },
    {
      name: 'Romance',
      img: 'https://i.ibb.co.com/7xXfGRgB/photo-1663868290007-e8df80a5b909-ixlib-rb-4-1.jpg',
    },
    {
      name: 'Thriller',
      img: 'https://i.ibb.co.com/3nJ1DHK/photo-1604742496374-8aba83957a9b-ixlib-rb-4-1.jpg',
    },
    {
      name: 'Sci-Fi',
      img: 'https://i.ibb.co.com/w9s5BQC/photo-1612094264296-0a0fc161e367-ixlib-rb-4-1.jpg',
    },
    {
      name: 'Horror',
      img: 'https://i.ibb.co.com/TxhqJhRZ/photo-1635007129134-814c0b7c777e-ixlib-rb-4-1.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Browse by Category
      </h2>


      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={cat.img}
                alt={cat.name}
                className="rounded-xl h-40 w-full object-cover group-hover:brightness-75 transition"
              />
              <p className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                {cat.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;

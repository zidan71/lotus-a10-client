import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { EffectCards, Navigation } from 'swiper/modules';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
];

const info = [
  { name: 'John Doe', review: 'Amazing visuals and smooth transitions! Loved the experience.' },
  { name: 'Emma Watson', review: 'A truly immersive and unique way to showcase images.' },
  { name: 'Michael Brown', review: 'Stunning design and fluid animations. Highly recommended!' },
  { name: 'Sophia Lee', review: 'A visually striking way to present content, very impressive!' },
  { name: 'Daniel Smith', review: 'This is the best image slider I have ever seen!' },
];

const Slider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-20">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        navigation={true}
        modules={[EffectCards, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              {/* Review Text */}
              <div className="absolute bottom-8 left-8 right-8 text-white text-center">
                <p className="text-lg font-semibold italic mb-2">"{info[index].review}"</p>
                <p className="text-sm font-medium">- {info[index].name}</p>
              </div>
              {/* Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
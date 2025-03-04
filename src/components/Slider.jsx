import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { EffectCards, Navigation } from 'swiper/modules';
import { Fade } from "react-awesome-reveal";
import img1 from '../assets/1 (1).jpg';
import img2 from '../assets/22.jpg';
import img3 from '../assets/33.jpg';
import img4 from '../assets/44.jpg';
import img5 from '../assets/55.jpg';

const images = [img1, img2, img3, img4, img5];

const info = [
  { name: 'Liam Carter', review: 'Top-notch quality sports accessories! The durability and design are outstanding.' },
  { name: 'Olivia Martinez', review: 'A fantastic collection of sports gear! The website makes shopping effortless and enjoyable.' },
  { name: 'Ethan Rodriguez', review: 'High-performance accessories with sleek designs. Perfect for any athlete!' },
  { name: 'Ava Thompson', review: 'Amazing variety and premium quality! Found everything I needed for my workouts.' },
  { name: 'Noah Wilson', review: 'Best sports accessories store online! Highly recommended for fitness enthusiasts.' },
];

const Slider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4 lg:px-0">
      <Fade>
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
              <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-orange-500">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <p className="text-lg font-semibold italic mb-2">"{info[index].review}"</p>
                  <p className="text-sm font-medium">- {info[index].name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </div>
  );
};

export default Slider;

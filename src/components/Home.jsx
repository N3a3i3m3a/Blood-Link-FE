import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RiRadioButtonLine, RiRadioButtonFill } from 'react-icons/ri';

const Home = () => {
  const slides = [
    { src: '/Donate.webp', alt: 'Donate blood' },
    { src: '/Book.jpg', alt: 'Book appointment' },
    { src: '/Hospital.jpg', alt: 'Request for blood' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 mt-12 '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>

      {/* Left Arrow */}
      <div className='absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className='absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Slide Indicators */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            {slideIndex === currentIndex ? (
              <RiRadioButtonFill />
            ) : (
              <RiRadioButtonLine />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
  
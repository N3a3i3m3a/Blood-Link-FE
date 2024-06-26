import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RiRadioButtonLine, RiRadioButtonFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

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
    <div className=' w-full mx-auto py-16 px-4'>
     
      <div className="mt-[64px] overflow-y-auto h-[calc(92vh-64px)] rounded-2xl bg-center bg-cover duration-500 md:mr-0 sm:mr-0 relative">
        {/* Slide Container */}
        {slides.map((slide, index) => (
          <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={slide.src}
              alt={slide.alt}
              className='w-full h-full object-cover'
            />
            {/* Text Overlay */}
            <div className='absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
              <p className='text-4xl font-bold'>Donate blood & save life</p>
            </div>
          </div>
        ))}
        
        {/* Left Arrow */}
        <div className='absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className='absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* Buttons */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-4">
            {/* Common Button */}
            <Link to="/Contact"><button className="bg-red-500 text-white px-4 py-2 rounded">Contact us</button></Link>
            {/* Unique Buttons */}
            {slides.map((slide, slideIndex) => (
              <Link to="/Login" key={slideIndex}><button
                className={`bg-red-500 text-white px-4 py-2 rounded ${currentIndex === slideIndex ? '' : 'hidden'}`}
              >
                {slideIndex === 0 && "Donate blood"}
                {slideIndex === 1 && "Book appointment"}
                {slideIndex === 2 && "Request blood Donater"}
              </button></Link>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer mx-1 ${
                slideIndex === currentIndex ? 'text-red-500' : 'text-gray-500'
              }`}
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
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import hero_video from '../../../Assets/Videos/hero.mp4';
import cafe_image from '../../../Assets/Images/cafe_img.jpg'; // Import the image

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePlayClick = () => {
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center mt-[15vh]" style={{ backgroundImage: `url(${cafe_image})` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        
        {/* Play button */}
        <button
          onClick={handlePlayClick}
          className="mb-8 p-6 bg-white rounded-full shadow-lg focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4.5 2.75a1.25 1.25 0 011.818-1.111l15.75 9a1.25 1.25 0 010 2.222l-15.75 9A1.25 1.25 0 014.5 20.25v-15.5z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* Title */}
        <h1 className="text-4xl font-semibold md:text-5xl">
          Feel the authentic & original taste from us
        </h1>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative w-4/5 h-4/5">
            {/* Video */}
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src={hero_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white p-2 rounded-full"
              onClick={closeVideo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 011.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;

import React from "react";
import hero_comp from '../../../Assets/Images/hero_1.jpg'

const HeroSection = () => {
  return (
    <div className="relative bg-white h-screen">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero_comp} // Replace with your image path
          alt="Cafe background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content on top of background */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-3xl mx-auto px-10 ">
          <h1 className="text-5xl font-bold text-white drop-shadow-md">
            Best Food For Your Taste
          </h1>
          <p className="mt-4 text-xl text-gray-200 drop-shadow-md">
            Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="px-6 py-3 text-white bg-red-500 rounded-lg font-medium hover:bg-orange-600 drop-shadow-md">
              Book A Table
            </button>
            <button className="px-6 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-100 drop-shadow-md">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

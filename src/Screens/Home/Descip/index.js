import React from 'react';
import coffee from '../../../Assets/Images/familymeal.jpg';

const RestaurantInfo = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 items-center">
        
        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            src={coffee}
            alt="Dish"
            className="rounded-lg shadow-lg object-cover w-full max-w-lg md:max-w-none md:h-[70vh] aspect-video"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            We provide 
            <span className="text-red-600 italic"> Healthy</span> food for your 
            <span className="text-red-600 italic"> Family</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in the city's rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            At our place, we believe that dining is not just about food, but
            also about the overall experience. Our staff, renowned for their
            warmth and dedication, strives to make every visit an unforgettable
            event.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-800 focus:outline-none focus:ring focus:ring-red-300 transition">
              Book A Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;

import React from "react";
import hero_2 from '../../../Assets/Images/hero_2.jpg';

const StatsSection = () => {
  return (
    <div
      className="relative bg-black text-white py-20"
      style={{
        backgroundImage: `url(${hero_2})`, // use correct path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Michelin Stars */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold">2</span>
            <span className="text-lg mt-2">MICHELIN STARS</span>
          </div>

          {/* Served Customers */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold">5000+</span>
            <span className="text-lg mt-2">SERVED CUSTOMERS</span>
          </div>

          {/* Served Dishes */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold">15000+</span>
            <span className="text-lg mt-2">SERVED DISHES</span>
          </div>

          {/* Total Chefs */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold">5</span>
            <span className="text-lg mt-2">TOTAL CHEFS</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="/blog"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-10 rounded-full transition"
          >
            Check Our Story
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

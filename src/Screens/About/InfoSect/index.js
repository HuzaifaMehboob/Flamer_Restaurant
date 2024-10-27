import React from "react";
import about_img from '../../../Assets/Images/about_img.avif'
const InfoSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            A little information for <br /> our valuable guest
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-gray-800">3</h3>
              <p className="text-gray-600 mt-2">Locations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-gray-800">1995</h3>
              <p className="text-gray-600 mt-2">Founded</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-gray-800">65+</h3>
              <p className="text-gray-600 mt-2">Staff</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-gray-800">100%</h3>
              <p className="text-gray-600 mt-2">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src={about_img}
            alt="Food preparation"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

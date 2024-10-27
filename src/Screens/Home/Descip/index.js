import React from 'react';
import coffee from '../../../Assets/Images/familymeal.jpg'

const RestaurantInfo = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center">
        {/* Image and Contact Info */}
        <div className="relative w-full h-full   flex justify-center md:w-1/2">
          <img
            src={coffee}
            alt="Dish"
            className="rounded-lg shadow-lg object-cover w-[100%] h-[80vh]"
          />
          {/* Contact Info Overlay */}
          {/* <div className="absolute bottom-5 right-7 bg-red-600 text-white p-6 rounded-lg shadow-lg transform translate-y-1/2">
            <h3 className="text-base font-semibold flex-col justify-around align-center">Come and visit us</h3>
            <p className="mt-2 text-sm py-1 px-3">
              <span className='mr-2'>📞</span>  (414) 857 - 0107
            </p>
            <p className="mt-2 text-sm py-1 px-3">
              <span className='mr-2'>✉️ </span>  happytummy@restaurant.com
            </p>
            <p className="mt-2 text-sm py-1 px-3">
              <span className='mr-2'>📍 </span> 837 W. Marshall Lane Marshalltown<br/>
            <p className="mt-2 text-sm  px-4">
            , IA 50158, Los Angeles
            </p>
            </p>
          </div> */}
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[40%] mt-10 md:mt-0 md:ml-10  text-center md:text-left">
          <h1 className="text-6xl font-bold text-gray-800">
            We provide 
            <p className="text-red-600 italic">Healthy</p>
            food for your 
            <p className="text-red-600 italic">Family</p>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in the city's rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            At our place, we believe that dining is not just about food, but
            also about the overall experience. Our staff, renowned for their
            warmth and dedication, strives to make every visit an unforgettable
            event.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-800 transition">
              Book A Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
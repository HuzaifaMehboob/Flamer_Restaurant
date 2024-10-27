import React from 'react';
import chief from '../../../Assets/Images/chief.avif';
import foodsect from '../../../Assets/Images/foodsect.avif';
import foodsect2 from '../../../Assets/Images/foodsect2.avif';

const FoodDeliveryTemplate = () => {
  return (
    <div className="flex my-[20vh] flex-col lg:flex-row items-center justify-center lg:justify-between p-8 space-y-8 lg:space-y-0 lg:space-x-12">
      
      {/* Left Section - Images */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-1/2">
        
        {/* Main Chef Image */}
        <div className="w-full lg:w-3/5 flex-grow">
          <div className="h-[300px] lg:h-[400px] w-full">
            <img
              src={chief}
              alt="Chef holding dish"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Side Food Images */}
        <div className="flex flex-col space-y-4 w-full lg:w-2/5 flex-grow">
          <div className="h-[140px] lg:h-[190px] w-full">
            <img
              src={foodsect}
              alt="Grilled food"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="h-[140px] lg:h-[190px] w-full">
            <img
              src={foodsect2}
              alt="Traditional food"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
      
      {/* Right Section - Text and Button */}
      <div className="flex flex-col items-start space-y-10 w-full pr-6 lg:w-1/2 justify-between">
        <h2 className="text-3xl lg:text-7xl font-bold text-gray-800 ">
          <span className='text-red-600 italic'>Fastest</span>  Food <br/> 
           <span className='text-red-600 italic'>Delivery</span> in City
        </h2>
        <p className="text-gray-600 text-base lg:text-lg">
          Our visual designer lets you quickly and easily drag your way to custom apps for both desktop and mobile.
        </p>
        <ul className="space-y-4 text-base lg:text-xl font-semibold">
          <li className="flex items-center">
            <span className="mr-2 text-orange-500">⏱</span> Delivery within 30 minutes
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-yellow-500">🏷</span> Best Offer & Prices
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-800">🛒</span> Online Services Available
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default FoodDeliveryTemplate;
import React, { useState } from 'react';
import MenuItemCard from '../../Components/MenuItemCard';
import Footer from '../../Components/Footer';
import Navbar from '../Home/Navbar';
import { menuItems } from './menuItems';

const categories = ["All", "Breakfast", "Main Dishes", "Appetizer", "Beverages", "Desserts"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = menuItems[activeCategory] || [];

  return (
    <div className="h-[100vh] w-[100vw] box-sizing">
      <Navbar />
      <div className="bg-white py-10 my-10 box-sizing">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-red-600 italic">OUR</span> Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            We consider all the drivers of change and provide you with the components needed to create truly unforgettable dining experiences.
          </p>
        </div>

        {/* Responsive Category Buttons */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 sm:px-6 box-sizing rounded-full font-semibold transition duration-200 ${
                activeCategory === category
                  ? 'bg-red-500 text-white'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  px-6 sm:px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl justify-center">
          {filteredItems.map((item, index) => (
            <MenuItemCard
              key={index}
              image={item.pic}
              price={item.price}
              title={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;

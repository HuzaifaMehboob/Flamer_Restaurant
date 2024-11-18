import React from "react";
import { TbSoupFilled } from "react-icons/tb";
import { MdDinnerDining } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";

const MenuSection = () => {
  const menuItems = [
    {
      title: "Appetizers",
      description:
        "Kick off your meal with our delicious starters, from fresh salads to savory soups and finger foods that are perfect for sharing.",
      icon: <TbSoupFilled aria-label="Appetizers Icon" />,
    },
    {
      title: "Main Dishes",
      description:
        "Indulge in our hearty main courses, featuring family favorites and chef’s specialties crafted to satisfy any craving.",
      icon: <MdDinnerDining aria-label="Main Dishes Icon" />,
    },
    {
      title: "Drinks",
      description:
        "Quench your thirst with our selection of refreshing beverages, including crafted cocktails, soft drinks, and house-made mocktails.",
      icon: <RiDrinks2Fill aria-label="Drinks Icon" />,
    },
    {
      title: "Desserts",
      description:
        "End on a sweet note with our tempting desserts, from classic cakes to rich, indulgent treats that will leave you craving more.",
      icon: <GiCakeSlice aria-label="Desserts Icon" />,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-8">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Browse Our <span className="text-red-500">Menu</span>
      </h2>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white rounded-xl p-6 flex flex-col items-center text-center min-h-[28rem] hover:shadow-xl hover:border-red-400 transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="rounded-full bg-red-500 p-6 flex items-center justify-center text-black text-6xl mb-6 hover:bg-red-600 transition-colors duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 font-medium leading-relaxed mb-6 px-4 flex-grow text-center line-clamp-4">
              {item.description}
            </p>

            {/* Call to Action */}
            <div className="mt-4">
              <a
                href="#"
                className="text-red-600 font-bold hover:underline hover:text-red-700 transition-colors duration-200"
              >
                Explore Menu
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;

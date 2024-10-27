import React from "react";
import { TbSoupFilled } from "react-icons/tb";
import { MdDinnerDining } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";

const MenuSection = () => {
  const menuItems = [
    {
      title: "Appetizers",
      description: "Kick off your meal with our delicious starters, from fresh salads to savory soups and finger foods that are perfect for sharing.",
      icon: <TbSoupFilled />,
    },
    {
      title: "Main Dishes",
      description: "Indulge in our hearty main courses, featuring family favorites and chef’s specialties crafted to satisfy any craving.",
      icon: <MdDinnerDining />,
    },
    {
      title: "Drinks",
      description: "Quench your thirst with our selection of refreshing beverages, including crafted cocktails, soft drinks, and house-made mocktails.",
      icon: <RiDrinks2Fill />,
    },
    {
      title: "Desserts",
      description: "End on a sweet note with our tempting desserts, from classic cakes to rich, indulgent treats that will leave you craving more.",
      icon: <GiCakeSlice />,
    },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Browse Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white rounded-lg p-6 flex flex-col items-center text-center h-[28rem] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="rounded-full bg-red-400 p-6 flex items-center justify-center text-black text-6xl mb-4">
              {item.icon}
            </div>
            <h3 className="text-2xl text-black font-bold mb-2">{item.title}</h3>
            <p className="text-gray-700 font-semibold italic leading-loose mb-6 mt-4 px-2 flex-grow text-center">
              {item.description}
            </p>
            <div className="mt-4">
              <a href="#" className="text-red-600 font-bold hover:underline">
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

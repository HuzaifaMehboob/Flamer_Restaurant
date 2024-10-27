import React from 'react';

const MenuItemCard = ({ image, price, title, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg max-w-xs">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-orange-500 text-xl font-bold">${price}</h2>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;

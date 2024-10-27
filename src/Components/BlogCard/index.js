import React from 'react';

const BlogCard = ({ date, title, imageSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-6">
        <p className="text-gray-500 text-sm">{date}</p>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;

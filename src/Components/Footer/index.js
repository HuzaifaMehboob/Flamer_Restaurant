import React from "react";
import footer_img1 from '../../Assets/Images/footer_img1.avif'
import footer_img2 from '../../Assets/Images/footer_img2.avif'
import footer_img3 from '../../Assets/Images/footer_img3.avif'
import footer_img4 from '../../Assets/Images/footer_img4.avif'
import flamer from '../../Assets/Images/flamer_logo.svg'

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and description */}
        <div>
          <img src={flamer} alt="Logo" className="w-[120px] mt-0  justify-start" />
          <p className="text-gray-400">
            In the new era of technology we look in the future with certainty and pride for our company and.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-orange-500 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-orange-500 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-orange-500 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-orange-500 hover:text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Pages</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Menu</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Utility Pages</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Start Here</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Breakfast</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Dinner</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Lunch</a></li>
          </ul>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          <img
            src={footer_img1}
            alt="food"
            className="aspect-[4/3] w-full h-auto object-cover rounded-lg"
          />
          <img
            src={footer_img2}
            alt="food"
            className="aspect-[4/3] w-full h-auto object-cover rounded-lg"
          />
          <img
            src={footer_img3}
            alt="food"
            className="aspect-[4/3] w-full h-auto object-cover rounded-lg"
          />
          <img
            src={footer_img4}
            alt="food"
            className="aspect-[4/3] w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-5">
        <p>Copyright © 2023 FramerBite. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

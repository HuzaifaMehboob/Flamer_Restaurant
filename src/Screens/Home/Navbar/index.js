
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import hero_comp from '../../../Assets/Images/hero_1.jpg';
import { useNavigate } from 'react-router-dom';
import flamer from '../../../Assets/Images/flamer_logo.svg'


const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black bg-opacity-90 box-border p-0 m-0 backdrop-blur-xs">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 lg:px-6 max-w-screen-xl">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={flamer} alt="Logo" className="md:w-[60px] sm:w-[50px] w-[40px]" />
          <a href="/" className="md:text-3xl text-2xl font-bold text-red-600">
            Flamer
          </a>
        </div>

        {/* Hamburger Icon for Mobile and Tablet View */}
        <div
          className="md:hidden text-white cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Dropdown Menu for Mobile, Tablet, and Full Menu for Desktop */}
        <ul
          className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:relative md:transform-none md:bg-transparent md:flex md:w-auto md:space-x-6 lg:space-x-8 md:bg-opacity-0`}
        >
          <div className="flex flex-col items-center justify-center h-full md:h-auto space-y-6 md:space-y-0 md:flex-row md:space-x-6 lg:space-x-10">
            {['Home', 'Menu', 'About', 'Blog', 'Contact'].map((item) => (
              <li key={item} className="py-2 md:py-0">
                <a
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white hover:border-b-2 border-red-600 text-2xl md:text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="py-2 md:py-0">
              <button
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-700 transition text-2xl md:text-base"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/reservation');
                }}
              >
                Reservation
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};



export default Navbar
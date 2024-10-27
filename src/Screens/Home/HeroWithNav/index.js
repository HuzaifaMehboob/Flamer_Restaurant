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
    <nav className="bg-black bg-opacity-90 backdrop-blur-xs fixed w-full z-30 box-border p-0 m-0">
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




const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className="relative h-[120vh]">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero_comp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-3xl mx-auto px-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-md">
            Best Food For Your Taste
          </h1>
          <p className="mt-4 text-xl text-gray-200 drop-shadow-md">
            Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="px-6 py-3 text-white bg-red-500 rounded-lg font-medium hover:bg-red-800 drop-shadow-md"
              onClick={() => navigate('/reservation')}>
              Book A Table
            </button>
            <button className="px-6 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-200 drop-shadow-md"
              onClick={() => navigate('/menu')}>

              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Combined Component
const HeroWithNavbar = () => {
  return (
    <div className="w-[100vw] p-0 m-0 box-border">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HeroWithNavbar;

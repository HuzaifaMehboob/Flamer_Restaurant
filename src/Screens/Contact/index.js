import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../Home/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <section className="pt-10 bg-white dark:bg-gray-900">
      {/* Form Section */}
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-5xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
          Contact <span className="text-red-600 text-5xl mx-2">Us</span>
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center italic font-semibold text-gray-500 dark:text-gray-400 sm:text-xl">
          We consider all the drivers of change to give you the components you need to create a meaningful impact.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-base text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-semibold text-base text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-base text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 font-semibold text-base text-center text-white rounded-lg bg-red-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Footer Section with Same Width as Form */}
      <div className=" mt-2 mb-20">
        <div className="container mx-auto max-w-screen-md flex flex-col md:flex-row justify-between items-center text-center space-y-6 md:space-y-0 md:space-x-16">
          {/* Call Us Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold">Call Us:</h4>
            <a href="tel:+12345678900" className="text-orange-500 text-2xl font-bold mt-2">
              +1-234-567-8900
            </a>
          </div>

          {/* Hours Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold">Hours:</h4>
            <p className="mt-2 text-gray-700">
              Mon–Fri: 11am – 8pm <br />
              Sat, Sun: 9am – 10pm
            </p>
          </div>

          {/* Location Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold">Our Location:</h4>
            <p className="mt-2 text-gray-700">
              123 Bridge Street <br />
              Nowhere Land, LA <br />
              12345 United States
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    </>
  );
};

export default Contact;

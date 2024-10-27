import React, { useState } from 'react';
import Footer from '../../Components/Footer'
import Navbar from '../Home/Navbar';
const Reservation = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    totalPerson: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <section className="relative h-screen">
      {/* Full Width Form Section */}
      <div className="relative bg-white w-full mt-10 p-8">
        <h2 className="lg:text-5xl text-4xl font-bold mb-4 text-center"><span className='text-red-500 italic text-5xl'>Book</span> A Table</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          We consider all the drivers of change and provide the components you need to create a truly unique experience.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto z-1 relative">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="date" className="block font-semibold mb-2">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-semibold mb-2">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
              placeholder="x-XXX-XXXX"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="totalPerson" className="block font-semibold mb-2">Total Person</label>
            <input
              type="number"
              id="totalPerson"
              name="totalPerson"
              value={formData.totalPerson}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-800 shadow-lg"
          >
            Book A Table
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="bottom-0 left-0 w-full h-2/3 z-0 mt-5 mb-[10vh]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.6344709693226!2d4.891029651115688!3d52.3731698795887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609a2dddb8a6f%3A0xf57c82d61b09b51b!2sAnne%20Frank%20House!5e0!3m2!1sen!2snl!4v1601326317897!5m2!1sen!2snl"
          className="w-full h-full"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer/>
    </section>
    </>
  );
};

export default Reservation;

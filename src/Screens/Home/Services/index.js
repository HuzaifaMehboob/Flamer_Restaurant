import React from "react";
import catering from '../../../Assets/Images/catering.avif'
import birthday from '../../../Assets/Images/birthday.avif'
import wedding from '../../../Assets/Images/wedding.avif'
import events from '../../../Assets/Images/events.avif'

const ServicesSection = () => {
  const services = [
    {
      title: "Caterings",
      description: "Bring our flavors to your location! Our catering service offers a wide range of options, from casual to fine dining, tailored to suit your event’s unique needs.",
      imageUrl: catering, // Replace with actual image URL
    },
    {
      title: "Birthdays",
      description: "Celebrate life’s special moments with us! Enjoy personalized birthday setups, delicious menus, and a festive atmosphere that makes your day unforgettable.",
      imageUrl: birthday, // Replace with actual image URL
    },
    {
      title: "Weddings",
      description: "Make your big day as perfect as you dreamed. From elegant décor to curated menus, our wedding service ensures a memorable and seamless experience.",
      imageUrl: wedding, // Replace with actual image URL
    },
    {
      title: "Events",
      description: "Host any gathering with ease. Whether it’s a family reunion, anniversary, or business event, we provide customized service and ambiance for every occasion.",
      imageUrl: events, // Replace with actual image URL
    },
  ];

  return (
    <div className="my-[20vh] bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">We Also Offer <span className="text-red-600 italic font-bold">UNIQUE</span> Services For Your Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

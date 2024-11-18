import React from 'react';
import user1 from '../../../Assets/Images/user1.avif';              
import user2 from '../../../Assets/Images/user2.avif';  
import user3 from '../../../Assets/Images/user3.avif';  

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The best restaurant",
      review: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      imgSrc: user1,
    },
    {
      quote: "Simply delicious",
      review: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      name: "Jack Doe",
      location: "Los Angeles, CA",
      imgSrc: user2,
    },
    {
      quote: "One of a kind restaurant",
      review: "The culinary experience at place is first to none. The atmosphere is vibrant, the food—nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      imgSrc: user3,
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          What Our Customers <span className="text-red-500 italic">Say</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg flex flex-col justify-between overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="p-8">
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
                  “{testimonial.quote}”
                </blockquote>
                {/* Review */}
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {testimonial.review}
                </p>
              </div>
              {/* Author Info */}
              <div className="flex items-center  p-4 border-t">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

import React from 'react';
import user1 from '../../../Assets/Images/user1.avif'              
import user2 from '../../../Assets/Images/user2.avif'  
import user3 from '../../../Assets/Images/user3.avif'  

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The best restaurant",
      review: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      imgSrc: user1, // Replace with actual path to the image
    },
    {
      quote: "Simply delicious",
      review: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      name: "Jack Doe",
      location: "Los Angeles, CA",
      imgSrc: user2, // Replace with actual path to the image
    },
    {
      quote: "One of a kind restaurant",
      review: "The culinary experience at place is first to none. The atmosphere is vibrant, the food—nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      imgSrc: user3, // Replace with actual path to the image
    }
  ];

  return (
    <div className=" mb-12 py-16 flex justify-center bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Customers <span className='text-red-500 italic text-4xl'>Say</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-customGray p-6 w-80 rounded-lg shadow-lg h-[30rem] flex flex-col justify-between">
              <div className='space-y-8 py-3 px-2'>
                <blockquote className="text-2xl font-bold text-red-500 mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <p className="text-gray-700 mb-6 text-lg font-normal leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <img 
                  src={testimonial.imgSrc} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg text-black">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.location}</p>
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

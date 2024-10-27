import React from "react";

const Features = () => {
  const features = [
    {
      title: "Multi Cuisine",
      description:
        "In the new era of technology we look in the future with certainty life.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-orange-500 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25v19.5M19.5 9.75l-7.5 7.5-7.5-7.5"
          />
        </svg>
      ),
    },
    {
      title: "Easy To Order",
      description:
        "In the new era of technology we look in the future with certainty life.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-orange-500 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6.75h18M3 12h18m-7.5 5.25h7.5"
          />
        </svg>
      ),
    },
    {
      title: "Fast Delivery",
      description:
        "In the new era of technology we look in the future with certainty life.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-orange-500 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6V3.75m0 16.5V18M4.5 15.75h3m9-9h3m-3 6h3m-6 3v-3.75m-6 0V12m0-3.75V3"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 max-w-xs mx-auto">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

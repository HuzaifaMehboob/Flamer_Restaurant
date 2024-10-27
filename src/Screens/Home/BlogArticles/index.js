import React from 'react';
import article1 from '../../../Assets/Images/article1.avif';
import article2 from '../../../Assets/Images/article2.avif';
import article3 from '../../../Assets/Images/article3.avif';

const BlogArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
      date: "January 3, 2023",
      image: article1,
      description: "Discover the unique culinary tips and techniques our chefs use to create the perfect burger and pizza experience. From choosing the finest ingredients to mastering cooking methods, our kitchen is all about serving the best to our valued customers. Join us on this culinary journey and bring these secrets to your own kitchen!",
    },
    {
      id: 2,
      title: "How to prepare a delicious gluten-free sushi",
      date: "April 8, 2022",
      image: article2,
    },
    {
      id: 3,
      title: "Exclusive baking lessons from the pastry king",
      date: "March 15, 2022",
      image: article3,
    },
  ];

  return (
    <section className="my-[20vh] bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Blog <span className="text-red-600 italic text-5xl mx-2">&</span> Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large article card on the left */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out px-6 py-4">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-56 object-cover rounded-t-lg" // Set height to 56 to make it shorter
            />
            <div className="px-4 py-6">
              <p className="text-sm text-gray-400 mb-2">{articles[0].date}</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{articles[0].title}</h2>
              <p className="text-gray-600 mb-4">{articles[0].description}</p>
              <button className="bg-red-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                Read More
              </button>
            </div>
          </div>

          {/* Two smaller cards on the right */}
          <div className="space-y-8">
            {articles.slice(1).map(article => (
              <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-400 mb-2">{article.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
                  <button className="bg-red-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;

import React from 'react';
import BlogCard from '../../Components/BlogCard';
import blogpage_1 from '../../Assets/Images/blogpage_1.avif'
import blogpage_2 from '../../Assets/Images/blogpage_2.avif'
import blogpage_3 from '../../Assets/Images/blogpage_.avif'
import blogpage_4 from '../../Assets/Images/blogpage_4.avif'
import blogpage_5 from '../../Assets/Images/blogpage_5.avif'
import Footer from '../../Components/Footer';
import Navbar from '../Home/Navbar';
const BlogPage = () => {
  const blogs = [
    {
      date: 'Apr 8, 2022',
      title: 'How to prepare a delicious gluten free sushi',
      imageSrc: blogpage_1
    },
    {
      date: 'Mar 15, 2022',
      title: 'Exclusive baking lessons from the pastry king',
      imageSrc: blogpage_2
    },
    {
      date: 'Feb 28, 2022',
      title: 'How to prepare the perfect fries in an air fryer',
      imageSrc: blogpage_3
    },
    {
        date: 'Apr 8, 2022',
        title: 'How to prepare a delicious gluten free sushi',
        imageSrc: blogpage_4
      },
      {
        date: 'Mar 15, 2022',
        title: 'Exclusive baking lessons from the pastry king',
        imageSrc: blogpage_5
      },
      {
        date: 'Feb 28, 2022',
        title: 'How to prepare the perfect fries in an air fryer',
        imageSrc: blogpage_1
      },
  ];

  return (
    <div className='w-[100vw] h-[100vh] '>
      <Navbar/>
    <div className="min-h-screen my-8 py-10">
      <h1 className="text-5xl font-bold text-center mb-6">Our Blog <span className="text-red-600 italic text-6xl mx-2">&</span> Articles</h1>
      <p className="text-center mb-10 text-gray-600 max-w-screen-md mx-auto">
        We consider all the drivers of change give you the components you need to change to create a truly happens.
      </p>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            date={blog.date}
            title={blog.title}
            imageSrc={blog.imageSrc}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogPage;

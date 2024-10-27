import React from 'react';
import HeroSection from './Hero';
import MenuSection from './Menu';
import Descrip from './Descip';
import ServicesSection from './Services';
import FoodDeliverySection from './DeliverySect';
import TestimonialSection from './TestimonialSect';
import BlogArticles from './BlogArticles';
import Footer from '../../Components/Footer';
import StatsSection from './StateSect';
import HeroWithNavbar from './HeroWithNav';

function Home() {
  return (
    <div className='w-full h-full box-border p-0 m-0'>
        
        <HeroWithNavbar/>
         {/* <HeroSection /> */}
         <MenuSection/>
         <Descrip/>
         <ServicesSection/>
         <StatsSection/>
         <FoodDeliverySection/>
         <TestimonialSection/>
         <BlogArticles/>
         <Footer/>
    </div>
  );
}

export default Home;

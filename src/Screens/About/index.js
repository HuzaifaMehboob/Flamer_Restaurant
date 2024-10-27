import React from 'react'
import Descip from '../Home/Descip/index'
import Hero  from './Hero/index'
import Features from './Features'
import InfoSection from './InfoSect'
import TestimonialSection from '../Home/TestimonialSect'
import Footer from '../../Components/Footer'
import Navbar from '../Home/Navbar'
const About = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Navbar/>
        <Descip/>
        <Hero/>
        <Features/>
        <InfoSection/>
        <TestimonialSection/>
        <Footer/>
    </div>
  )
}

export default About
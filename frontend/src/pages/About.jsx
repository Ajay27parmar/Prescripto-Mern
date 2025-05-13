import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At Priscripto, we are on a mission to revolutionize the way people connect with healthcare providers. In a world where time is precious and health is paramount, we believe booking a doctor’s appointment should be quick, simple, and stress-free.</p>
          <p>Founded with the vision to bridge the gap between patients and trusted medical professionals, Priscripto offers a seamless digital platform that allows users to schedule appointments with top-rated doctors in just a few clicks. Whether you need a general consultation, a specialist opinion, or follow-up care, our platform brings the best medical expertise right to your fingertips.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To create a world where accessing quality healthcare is as effortless as a tap on your screen—bridging the gap between patients and trusted medical professionals through technology, transparency, and trust. At Priscripto, we envision a future where every individual can connect with the right doctor at the right time, ensuring better health outcomes and peace of mind for all.</p>
        </div>
      </div>

      <div className='text-center my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-6'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary-color)] 
        hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Instantly connect with the right doctor—no delays, no hassle. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary-color)] 
        hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Book appointments anytime, anywhere—in just a few clicks.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary-color)] 
        hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Get doctor recommendations tailored to your health needs.</p>
        </div>
      </div>
    </div>
  )
}

export default About

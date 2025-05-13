import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT<span className='text-gray-700 font-semibold'> US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>ITM GOI,<br /> Sitholi</p>
          <p className='text-gray-500'>Tel:  73892-09695  <br /> Email: <a href="mailto:ajay27022005parmar@gmail.com" className='text-blue-500 underline'>ajay27022005parmar@gmail.com</a></p>
          <p className='font-semibold text-lg text-gray-600'>Career at Priscripto</p>
          <p className='text-gray-500'>Join us in redefining how the world accesses healthcare—one appointment at a time.

📩 Interested? Send your resume to <a href="mailto:careers@priscripto.com" className='text-blue-500 underline'>careers@priscripto.com</a> and start your journey with us.</p>
          <button className='border border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact

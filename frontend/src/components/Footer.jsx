import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Footer  left  Section */}
            <div>
                  <img className='mb-5 w-40' src={assets.logo} alt=""/>
                  <p className='w-full md:w-2/3 text-gray-600 leading-6'>"Priscripto: Your gateway to effortless appointments with the best doctors at your fingertips."
                        <br/>
                        "At Priscripto, we believe that accessing top healthcare should be simple and stress-free. Our user-friendly platform allows you to effortlessly book appointments with the best doctors in your area. Experience convenience and quality care like never before—because your health deserves the best. Start your journey to better health today!"
                  </p>
            </div>
            {/* Footer Centre  Section */}
            <div>
                  <p className='text-xl font-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy policy</li>
                  </ul>
            </div>
            {/* Footer Right  Section */}
            <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91-7389209695</li>
                        <li>ajay27022005parmar@gmail.com</li>
                  </ul>
            </div>
      </div>

      {/*   --- Copyright text ----*/}
      <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto - All right Reserved</p>
      </div>
    </div>
  )
}

export default Footer

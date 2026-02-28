import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-50 rounded-lg px-6 md:px-10 lg:px-20'>
      {/*---left---*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]'>
        <p className='text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4 font-semibold leading-tight'>
          Book Appointment <br/>With Trusted Doctors
        </p>
        <div className='flex items-center gap-3 mb-6'>
  <img src={assets.group_profiles} alt="profiles" className='w-25 h-auto'/>
  <p className='text-gray-600 text-sm'>
    Simply browse through our extensive list of <br/>
    trusted doctors, schedule your appointment hassle-free.
  </p>
</div>
        <a href="#speciality" className='bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-blue-700'>
          Book appointment
          <img src={assets.arrow_icon} alt="arrow" className='w-4 h-4'/>
        </a>
      </div>
      
      {/*---right---*/}
      <div className='md:w-1/2 flex justify-center items-center'>
        <img src={assets.header_img} alt="header" className='w-full max-w-md h-auto'/>
      </div>
    </div>
  )
}

export default Header
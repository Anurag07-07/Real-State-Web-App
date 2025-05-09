import React from 'react'
import aboutImg from '../assets/about.png'
import { BsCheck2Circle } from "react-icons/bs";

const About = () => {
  return (
    <section className=' mx-auto max-w-[1440px] px-6 lg:px-12 py-16 xl:py-28'>
      <div className=' flex flex-col xl:flex-row gap-10'>
        {/* Left */}
        <div className=' flex-1'><img className=' h-[511px] rounded-xl' src={aboutImg} alt=''></img></div>
        {/* Right */}
        <div className=' flex flex-1 flex-col justify-center'>
          {/* Title */}
        <div className='pb-2'>
          <h6 className=' capitalize'>Few Steps to your new home</h6>
          <h2 className=' text-[33px] leading-tight md:text-[41px] md:leading-[1.3] mb-4 font-bold capitalize'>This is how easy it can be</h2>
        </div>
        <ul>
          <li className=' flex items-center gap-x-3 py-2'>
           <BsCheck2Circle /> Access exclusive property listings
          </li>
        <li className="flex items-center gap-x-3 py-2">
          <BsCheck2Circle /> Find your dream home in prime locations
        </li>
        <li className="flex items-center gap-x-3 py-2">
          <BsCheck2Circle /> Seamless online property search experience
        </li>
        <li className="flex items-center gap-x-3 py-2">
          <BsCheck2Circle /> Get personalized property recommendations
        </li>
        <li className="flex items-center gap-x-3 py-2">
          <BsCheck2Circle /> Transparent and hassle-free transactions
        </li>
        <li className="flex items-center gap-x-3 py-2">
          <BsCheck2Circle /> 24/7 customer support for all your inquiries
        </li>
        <li className="flex items-center gap-x-3 py-2">
          <BsCheck2Circle /> Comprehensive market analysis and reports
        </li>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default About
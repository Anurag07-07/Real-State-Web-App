import React from 'react'
import { Link } from 'react-router-dom'
import circle from '../assets/circle.png'
import client1 from '../assets/person-1.jpg'
import client2 from '../assets/person-2.jpg'
import sideImg from '../assets/sideImg.png'
import sideImg1 from '../assets/sideImg1.png'
import sideImg2 from '../assets/sideImg2.png'
const Hero = () => {
  return (
    <section className=' mx-auto max-w-[1440px] px-6 lg:px-12 mt-20 xl:mt-10'>
      <div className=' flex flex-col xl:flex-row gap-16'>
        {/* Left */}
        <div className=' flex justify-center flex-1 flex-col gap-y-8 xl:max-w-[555px]'>
          <h1 className='text-[41px] leading-tight md:text-[63px] md:leading-[1.3] mb-4 font-bold'>Invest in <span className=' text-[#7a62fe]'>Your Future</span> with confidence</h1>
          <p>Welcome to your dream home destination! We offer premium residential and commercial properties tailored to your lifestyle and budget. Whether buying, selling, or investing, our expert team ensures a smooth experience. Explore prime locations, modern amenities, and unmatched service. Your perfect property is just a click away—start your journey today!</p>
          <div className=' flex gap-3'>
            <a href='#listing' className='text-[14px] font-[500] bg-[#404040] px-7 py-2.5 text-white rounded-full  flex items-center justify-center'>Explore Properties</a>
            <Link className='  medium-14 bg-[#7a62fe] px-7 py-2.5 text-white transition-all flex items-center justify-center rounded-full'  to={'/create-listing'}><span className='text-[20px] font-[500] pr-1'>+</span>Add Property</Link>
          </div>
          <div className=' flex relative'>
            {/* Images */}
            <img className=' rounded-full h-[99px]' src={circle} alt=''></img>
            <img className=' rounded-full h-[80px] z-20 shadow-sm absolute left-16 ' src={client1} alt=''></img>
            <img className=' rounded-full h-[80px] z-10 shadow-sm absolute left-32 ' src={client2} alt=''></img>
          </div>
        </div>
        {/* Right */}
        <div className=' flex-1 flex flex-col gap-4'>
          <div className=' rounded-2xl h-[266px] overflow-hidden'><img className=' rounded-xl object-cover' src={sideImg}></img></div>
          <div className='flex items-center justify-between gap-4'>
            <div className=' flex flex-1 rounded-xl'><img className=' rounded-xl object-cover aspect-square' src={sideImg1}></img></div>
            <div  className=' flex flex-1 rounded-xl'><img src={sideImg2} className=' rounded-xl object-cover aspect-square'></img></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
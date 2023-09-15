import React from 'react';
import Images from './heroimg.png';


const Hero = () => {
  return (
    <div className='hero justify-around' id='home'>
      <div className='w-full max-h-[100vh] min-h-[100vh] items-center flex flex-row justify-around  ' style={{background: 'linear-gradient(180deg, #132A47 0%, rgba(19, 42, 71, 0.00) 100%)'}}>
        <div className='flex item-center justify-around w-[50vw] px-10'>
            <p className=' flex justify-center align-middle text-white text-5xl sm:text-3xl '>Welcome to your gateway to legal solutions where expertise meets convenience, and justice is just a click away</p>
        </div>
        <div className=''>
            <img src={Images} alt="hero_img" />
        </div>
      </div>
    </div>
  )
}

export default Hero

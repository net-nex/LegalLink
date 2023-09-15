import React from 'react';
import Image from '../assets/heroimg.png';
import './Hero.css';


const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='w-full max-h-[100vh] min-h-[100vh] items-center flex flex-row  ' style={{background: 'linear-gradient(180deg, #132A47 0%, rgba(19, 42, 71, 0.00) 100%)'}}>
        <div className='flex justify-center item-center align-middle w-[821px]'>
            <p className=' flex justify-center align-middle text-white hero_p'>Welcome to your gateway to legal solutions where expertise meets convenience, and justice is just a click away</p>
        </div>
        <div className='flex'>
            <img src={Image} alt="hero_img" />
        </div>
      </div>
    </div>
  )
}

export default Hero

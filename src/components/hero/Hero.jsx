import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-component text-white'>
      <div className='heading'>
        <h2 className='text-2xl'>
          Computer Engineering
        </h2>
        <span>142,765 Computer Engineers follow this</span>
      </div>
      <button id='join-btn' className='border border-white p-2'>
        Join Group
      </button>
    </div>
  );
};

export default Hero;

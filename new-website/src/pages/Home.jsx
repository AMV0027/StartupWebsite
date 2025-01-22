import React from 'react';
import bg1 from '../assets/bg1.png';

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row justify-between items-center overflow-hidden">
      {/* Text and content section */}
      <div className="w-full  md:w-1/2 h-[80vw] flex flex-col justify-center items-start pl-24">
        <p className="italic">
          Your Partner for Innovative Business Solutions
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Empowering Businesses, One Solution at a Time
        </h1>
        <p className="text-sm md:text-base w-full md:w-5/6">
          ABOP provides a comprehensive suite of B2B products and services tailored to modern business needs, from app development to AI integration, and beyond. Let us help you unlock your business’s true potential.
        </p>
        <button className="bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-800 transition">
          Get Started Today
        </button>
      </div>

      <div className=' w-full md:w-1/2 h-full p-12 flex items-center justify-center'>
        <div className='bg-zinc-800 w-4/6 h-4/6 rounded-xl pl-6 pr-6'>
          <div className='relative z-10 -translate-y-6 shadow-2xl w-full h-full border-2 rounded-xl'
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '20px',
            filter: 'grayscale(100%)',
            transition: 'filter 0.3s ease-in-out'
          }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { IoBookOutline } from "react-icons/io5";
import { LuSquareArrowUpRight } from "react-icons/lu";
import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';
import logo3 from '../assets/logo-3.png';
import logo4 from '../assets/logo-4.png';

function AboutSection() {
  const stats = [
    { name: "Customers", value: "5M+" },
    { name: "Earnings", value: "450M+" },
    { name: "Retention Rate", value: "22%" },
    { name: "Coverage", value: "80%" }
  ];

  return (
    <div className='w-screen h-full bg-[#00031D] relative text-white flex flex-col justify-between'>
      
      {/* About section */}
      <div className='mb-24 mt-24 flex flex-col md:flex-row justify-evenly items-center w-screen h-full'>
        
        {/* Left Column - About Content */}
        <div className='md:w-1/2 w-full flex flex-col items-start md:items-center justify-start md:justify-center pl-12 md:pl-0 mb-10 md:mb-0'>
          <div>
            <div className='flex gap-2 items-center text-xs'>
              <div className='h-[1px] w-[40px] bg-white'></div>
              <p>About</p>
              <div className='h-[1px] w-[40px] bg-white'></div>
            </div>
            <h1 className='text-4xl font-semibold'>
              Who we are <br /> and <span className='bg-[#c5c8e6] rounded-md text-[#282d56]'>What we do.</span>
            </h1>
            <a className='flex items-center cursor-pointer mt-2'>
              <div className='rounded-full border-2 p-2 m-1 flex items-center'>
                <IoBookOutline className='text-white' />
              </div>
              <div className='flex flex-col'>
                Know more about our company <div className='flex items-center gap-2'>company <LuSquareArrowUpRight /></div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Right Column - Description and Stats */}
        <div className='md:w-1/2 px-12 md:px-0 md:text-left text-justify w-full flex flex-col justify-center gap-3 md:pr-8 pr-12'>
          <p className='text-sm font-semibold'>
            We are a company focused on empowering businesses and individuals in the digital age. Our mission is to create visually appealing and functional digital pages tailored to each client's needs.
          </p>
          <p className='font-thin text-sm'>
            We offer a range of services, including website design, development, and innovative solutions to enhance brand identity and user engagement. We also build platforms that promote learning and skill development, connecting technology with education. Whether you're a startup, established business, or learner, we’re here to help you succeed in the digital world.
          </p>

          {/* Stats Section */}
          <div className='flex flex-row justify-evenly'>
            {stats.map((item, index) => (
              <div key={index} className='flex flex-col items-center justify-start'>
                <h1 className='text-2xl font-bold'>
                  {item.value}
                </h1>
                <p className='text-sm'>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Logos (Using Flexbox for smooth scrolling) */}
      <div className="overflow-hidden bg-gradient-to-r from-[#212544] via-[#5f6388] to-[#212544] pt-12 pb-12">
        <div className="animate-marquee flex gap-24 justify-start items-center">
          <img src={logo1} className='h-16 w-auto' alt="Logo 1" />
          <img src={logo2} className='h-16 w-auto' alt="Logo 2" />
          <img src={logo3} className='h-16 w-auto' alt="Logo 3" />
          <img src={logo4} className='h-16 w-auto' alt="Logo 4" />
          <img src={logo1} className='h-16 w-auto' alt="Logo 1" />
          <img src={logo2} className='h-16 w-auto' alt="Logo 2" />
          <img src={logo3} className='h-16 w-auto' alt="Logo 3" />
          <img src={logo4} className='h-16 w-auto' alt="Logo 4" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

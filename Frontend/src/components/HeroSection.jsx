import React, { useState, useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import mountain from '../assets/mountain.png'
import BlinkingStars from './BlinkingStars'


function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return (
    <div id='home' class=" w-screen h-screen bg-[#00031D] flex flex-col justify-center items-center text-center text-white">
        <div className='w-full flex flex-col items-center justify-center relative z-10 xl:-top-12 md:-top-10'>
            <h1 className='text-4xl md:text-6xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text mb-4'>
                Grow Your Business To <br /> New Heights
            </h1>
            <p className='w-[320px] sm:w-[400px] text-[10px] sm:text-xs'>
                Vertex partners with businesses to design tools that simplify processes, empower teams, and deliver results.
            </p>
            <a href="#contact" className='p-2 m-3 border-2 rounded-full hover:scale-110 transition-all ease-in-out'>
                <FaArrowUpLong className='rotate-45' />
            </a>
        </div>
        <BlinkingStars />
        <img src={mountain} className='absolute left-0 top-[70vh] sm:top-[40vh]  md:top-[20vh] lg:-top-[0vh] xl:-top-[22vh] select-none' 
        style={{
            transform: `translate(0px, ${-(mousePosition.y - window.innerHeight / 2) / 20}px)`
        }}
        />
    </div>
  )
}

export default HeroSection
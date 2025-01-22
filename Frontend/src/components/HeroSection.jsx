import React, { useState, useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import mountain from '../assets/mountain.webp';
import BlinkingStars from './BlinkingStars';

function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateParallax = () => {
        const mouseParallax = (mousePosition.y - window.innerHeight / 1) / 20;
        const scrollParallax = scrollPosition * 0.2;
        return {
            transform: `translate3d(0, ${mouseParallax + scrollParallax, 0}px, 0)`,
        };
    };

    return (
        <div id='home' className="w-screen h-screen bg-[#00031D] flex flex-col justify-center items-center text-center text-white overflow-hidden">
            <div className='w-full flex flex-col items-center justify-center relative z-[60] xl:-top-12 md:-top-10'>
                <h1 className='select-none text-4xl md:text-6xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text mb-4'>
                    Grow Your Business To <br /> New Heights
                </h1>
                <p className='select-none w-[320px] sm:w-[400px] text-[10px] text-xs md:text-lg'>
                    Vertex partners with businesses to design tools that simplify processes, empower teams, and deliver results.
                </p>
                <a href="#contact" className='p-2 m-3 border-2 rounded-full hover:scale-110 transition-all ease-in-out'>
                    <FaArrowUpLong className='rotate-45' />
                </a>
            </div>
            <BlinkingStars />
            <img
                src={mountain}
                className="move-in absolute z-30 left-0 bottom-0 translate-y-10 md:translate-y-32 xl:translate-y-72 select-none"
            // style={calculateParallax()}
            />
        </div>
    );
}

export default HeroSection;
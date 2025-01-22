import React, { useState, useEffect } from 'react';
import ast1 from '../assets/ast1.webp';

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sampleLogo = "https://i.pinimg.com/736x/88/9c/41/889c41d61af310f1ec5419fd9ff3156c.jpg";

  // Sample project data
  const projects = [
    {
      title: "Firm AI",
      description: "Law Education platform with AI Research engine for LAW Universities.",
      logo: sampleLogo,
      background: "https://i.pinimg.com/736x/15/ad/04/15ad04fb4558460b22180d8dc2fb3aa7.jpg",
    },
    {
      title: "ATS",
      description: "Attendands and HR Management System.",
      logo: sampleLogo,
      background: "https://i.pinimg.com/736x/c6/2a/59/c62a592a169a0cef9140c52081ab28af.jpg"
    },
    {
      title: "POS",
      description: "POS systems for wide range of industires.",
      logo: sampleLogo,
      background: "https://i.pinimg.com/736x/44/b2/b9/44b2b925093848896d6e17102ec0934f.jpg"
    },
    {
      title: "Quality Management systems",
      description: "Surfce anamoly and quality control systems.",
      logo: sampleLogo,
      background: "https://i.pinimg.com/736x/a1/28/84/a12884d3708e18cbfe3985d944d9c711.jpg"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const getTransform = (index) => {
    const degree = 360 / projects.length;
    const rotation = ((index - currentIndex) * degree) % 360;
    const translateZ = 400; // Radius of the cylinder
    const angle = (rotation * Math.PI) / 180;
    const z = Math.cos(angle) * translateZ;
    const x = Math.sin(angle) * translateZ;
    const scale = (z + translateZ) / (translateZ * 2); // Scale based on z-position
    // Calculate opacity based on rotation
    // Convert rotation to a value between 0 and 180 for opacity calculation
    const absRotation = Math.abs(rotation);
    const normalizedRotation = absRotation > 180 ? 360 - absRotation : absRotation;
    const opacity = 1 - (normalizedRotation / 180) * 1; // Keep minimum opacity at 0.2

    return {
      transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotation}deg) scale(${scale})`,
      zIndex: Math.round(scale * 10),
      opacity: opacity,
    };
  };

  return (
    <div id='portfolio' className="w-screen min-h-screen bg-[#00031D] relative z-30 text-white flex flex-col items-center justify-center p-8">
      <hr className='border-blue-300 w-full mb-12 opacity-40' />
      <style>
        {`
          .carousel-container {
            perspective: 10px;
            transform-style: preserve-3d;
          }
          
          .carousel-card {
            transition: all 0.5s ease-out;
            transform-style: preserve-3d;
          }

          .carousel-card:hover {
            transform: scale(1.05) !important;
          }
        `}
      </style>

      <div className="text-center mb-16">
        <div className='flex flex-row justify-center items-center gap-2'>
          <img src={ast1} className='w-12 invert h-full select-none mb-3 rotate-180' alt="" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text text-transparent mb-4">
            Our Products
          </h1>
          <img src={ast1} className='w-12 invert h-full select-none mb-3' alt="" />
        </div>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Explore our portfolio of innovative solutions and transformative projects
        </p>
      </div>

      <div className="carousel-container overflow-hidden relative w-screen h-[500px] flex items-center justify-center">
        <div className="relative flex justify-center w-full h-full">
          {projects.map((project, index) => (
            // card 
            <div
              key={index}
              className="carousel-card w-[75vw] h-[50vh] md:h-[60vh] cursor-pointer absolute"
              style={getTransform(index)}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.background})` }}
                >
                  <div className="absolute inset-0   shadow-inner bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-sm text-zinc-300">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-6' : 'bg-white/30'
              }`}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
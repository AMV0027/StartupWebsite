import React, { useState, useEffect } from 'react';
import ast1 from '../assets/ast1.png';

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sampleLogo = "https://srecspark.org/themes/images/logo.png";
    const sampleBg = "https://images.unsplash.com/photo-1418985991508-e47386d96a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // Sample project data
  const projects = [
    {
      title: "Digital Innovation",
      description: "Transforming business through cutting-edge solutions",
      logo: sampleLogo,
      background: sampleBg ,
    },
    {
      title: "Cloud Architecture",
      description: "Scalable and secure cloud infrastructure design",
      logo: sampleLogo,
      background: sampleBg
    },
    {
      title: "AI Integration",
      description: "Smart solutions powered by artificial intelligence",
      logo: sampleLogo,
      background: sampleBg
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      logo: sampleLogo,
      background: sampleBg
    },
    {
      title: "Data Analytics",
      description: "Insights driven by advanced analytics",
      logo: sampleLogo,
      background: sampleBg
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
    <div className="w-screen min-h-screen bg-[#00031D] relative z-30 text-white flex flex-col items-center justify-center p-8">
      <hr className='border-blue-300 w-full mb-12 opacity-40'/>
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

      <div className="carousel-container relative w-screen h-[500px] flex items-center justify-center">
        <div className="relative flex justify-center w-full h-full">
          {projects.map((project, index) => (
            // card 
            <div
              key={index}
              className="carousel-card w-[75vw] h-[60vh] cursor-pointer absolute"
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
                    className="w-12 h-12 rounded-full mr-3 filter saturate-0"
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-6' : 'bg-white/30'
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
import React, { useState, useEffect } from 'react';
import ast1 from '../assets/ast1.webp';

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sampleLogo = "https://i.pinimg.com/736x/88/9c/41/889c41d61af310f1ec5419fd9ff3156c.jpg";

  const projects = [
    { title: "Firm AI", description: "AI-powered law education platform.", logo: sampleLogo, background: "https://i.pinimg.com/736x/15/ad/04/15ad04fb4558460b22180d8dc2fb3aa7.jpg" },
    { title: "ATS", description: "Attendance and HR management system.", logo: sampleLogo, background: "https://i.pinimg.com/736x/c6/2a/59/c62a592a169a0cef9140c52081ab28af.jpg" },
    { title: "POS", description: "POS systems for various industries.", logo: sampleLogo, background: "https://i.pinimg.com/736x/44/b2/b9/44b2b925093848896d6e17102ec0934f.jpg" },
    { title: "Quality Control", description: "Surface anomaly detection & quality control.", logo: sampleLogo, background: "https://i.pinimg.com/736x/a1/28/84/a12884d3708e18cbfe3985d944d9c711.jpg" }
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

  const calculateCardStyles = (index) => {
    const degree = 360 / projects.length;
    const rotation = ((index - currentIndex) * degree) % 360;
    const translateZ = 500;
    const angle = (rotation * Math.PI) / 180;
    const z = Math.cos(angle) * translateZ;
    const x = Math.sin(angle) * translateZ;
    const scale = (z + translateZ) / (translateZ * 2);
    const opacity = Math.max(0.5, (z + translateZ) / (2 * translateZ));

    return {
      transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotation}deg) scale(${scale})`,
      zIndex: Math.round(scale * 100),
      opacity: opacity,
    };
  };

  return (
    <div id="portfolio" className="w-screen min-h-screen bg-[#00031D] text-white flex flex-col items-center justify-center p-8">
      <hr className="border-blue-300 w-full mb-12 opacity-40" />
      <div className="text-center mb-16">
        <div className="flex flex-row justify-center items-center gap-2">
          <img src={ast1} className="w-12 invert mb-3 rotate-180" alt="" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text text-transparent">
            Our Products
          </h1>
          <img src={ast1} className="w-12 invert mb-3" alt="" />
        </div>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Explore our portfolio of innovative solutions and transformative projects.
        </p>
      </div>

      <div className="carousel-container relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative flex justify-center w-full h-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="carousel-card absolute cursor-pointer w-[70vw] h-[50vh] md:h-[60vh] rounded-lg shadow-lg hover:scale-[1.03] transition-transform"
              style={calculateCardStyles(index)}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.background})` }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end backdrop-blur-md bg-gradient-to-t from-black/70 to-transparent rounded-lg">
                  <img src={project.logo} alt="Logo" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-sm text-zinc-300">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-8' : 'bg-white/30'}`}
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

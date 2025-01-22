import React from 'react';
import { FaStar } from "react-icons/fa";
import { GrLike } from "react-icons/gr";


function TestimonialSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      feedback: "This company provided the best service I could have hoped for! Highly recommended.",
      role: "CEO, InnovateTech",
      stars: 5,
    },
    {
      name: "Jessica Lee",
      feedback: "The team went above and beyond to deliver exceptional results. Truly amazing!",
      role: "Marketing Specialist, Creative Inc.",
      stars: 5,
    },
    {
      name: "Mark Rivera",
      feedback: "Great experience working with them. They understood my needs perfectly and delivered on time.",
      role: "Freelance Developer",
      stars: 4.5,
    },
    {
      name: "Sophia Bennett",
      feedback: "Professional, creative, and dedicated team. The project turned out better than I imagined!",
      role: "Product Manager, DesignWorks",
      stars: 4,
    },
    {
      name: "Daniel Cooper",
      feedback: "Fantastic service and support! They really care about their customers and it shows.",
      role: "Entrepreneur",
      stars: 4,
    },
  ];

  return (
    <div className="w-screen h-full bg-[#00031D]  text-white py-12 px-6 relative overflow-hidden">
      <hr className='border-blue-300 w-full mb-12 opacity-40' />
      {/* Header */}
      <div className='md:w-1/2 w-full flex flex-col justify-start items-start md:items-center md:mx-auto mb-12 mt-8'>
        <div className='flex gap-2 items-center text-xs  md:text-lg'>
          <div className='h-[1px] w-[40px] bg-white'></div>
          <p>Testimonials</p>
          <div className='h-[1px] w-[40px] bg-white'></div>
        </div>
        <h1 className='text-4xl font-semibold'>
          What our clients Say
        </h1>
        <a className='flex items-center cursor-pointer mt-2 md:pl-12'>
          <div className='rounded-full border-2 p-2 m-1 flex items-center text-white'>
            <GrLike />
          </div>
          <div className='flex flex-col text-sm'>
            Hear from our satisfied customers <br /> who trusted us to deliver excellence in every project.
          </div>
        </a>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-inner bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 transition transform hover:scale-105`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 text-sm mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < item.stars ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-sm leading-relaxed">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;

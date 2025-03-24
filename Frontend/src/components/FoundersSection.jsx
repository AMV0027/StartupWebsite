import React from 'react';
import anvin from '../assets/anwin.jpg';
import arun from '../assets/arun.png';
import harisudhan from '../assets/sudhan.png';

function FoundersSection() {
    const founders = [
        {
            name: 'Mr. G. NARENDRAN',
            title: 'Founder & CEO',
            image: 'https://srec.ac.in/uploads/resource/src/ikFSitG9nV210720221015422250-narendran-g.jpg',
            description: 'Founded the company and spearheaded its vision for growth and innovation.',
        },
        {
            name: 'Harisudhan M',
            title: 'CTO',
            image: harisudhan,
            description: 'CTO of the company, responsible for Technical and scaling operations.',
        },
        {
            name: 'Anvin P Shibu',
            title: 'Chief Operations Officer',
            image: anvin,
            description: 'Chief Operations Officer overseeing day-to-day business operations.',
        },
        {
            name: 'Arunmozhi Varman K',
            title: 'Technical Lead',
            image: arun,
            description: 'Technical head of operations, leading core product development and engineering.',
        }
    ];


    return (
        <div id="founders" className="w-screen min-h-screen bg-[#0E0B1E] text-white py-16 px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-700 via-white to-zinc-800 bg-clip-text text-transparent">
                    Meet the Founders
                </h1>
                <p className="text-zinc-400 max-w-lg mx-auto mt-4">
                    Discover the leaders and visionaries driving innovation and creating impact.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {founders.map((founder, index) => (
                    <div key={index} className="relative group bg-gray-400 shadow-inner rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
                        <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full aspect-square grayscale object-cover rounded-xl transition-transform duration-300"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold">{founder.name}</h2>
                            <p className="text-zinc-400 mb-2">{founder.title}</p>
                            <p className="text-zinc-400">{founder.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoundersSection;

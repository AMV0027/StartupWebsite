import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

function Home() {
  return (
    <div className='w-screen min-h-screen m-0 p-0 font-inter'>
        <HeroSection />
        <AboutSection />
    </div>
  )
}

export default Home
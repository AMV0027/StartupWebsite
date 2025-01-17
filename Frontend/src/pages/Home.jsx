import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ContactForm from "../components/ContactForm";
import ProjectSection from "../components/ProjectSection";
import TestimonialSection from "../components/testimonialSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-screen min-h-screen m-0 p-0 font-inter">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection/>
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;

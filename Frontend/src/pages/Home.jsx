import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ContactForm from "../components/ContactForm";
import ProjectSection from "../components/ProjectSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import FoundersSection from "../components/FoundersSection";

function Home() {
  return (
    <div className="w-screen min-h-screen m-0 p-0 font-inter">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      {/* <TestimonialSection /> */}
      <FoundersSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;

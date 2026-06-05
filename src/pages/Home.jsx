import React from "react";
import Hero from "../components/Hero";
import ITServiceOptions from "../components/ITServiceOptions";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import PartnersAndTechnologies from "../components/PartnersAndTechnologies";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <ITServiceOptions />
      <AboutSection />
      <WhyChooseUs />
      <PartnersAndTechnologies />
      <Testimonials />
    </>
  );
};

export default Home;

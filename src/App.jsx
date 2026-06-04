import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import ITServiceOptions from "./components/ITServiceOptions";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import PartnersAndTechnologies from "./components/PartnersAndTechnologies ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
// import { Home } from "./components/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <ITServiceOptions />
        <AboutSection />
        <WhyChooseUs />
        <PartnersAndTechnologies />
      </BrowserRouter>
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

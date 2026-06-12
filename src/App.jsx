import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Career_detail from "./pages/Career_detail";
import Services from "./pages/Services";
import TechNewsPage from "./pages/TechNewsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:slug" element={<Career_detail />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/news/" element={<TechNewsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

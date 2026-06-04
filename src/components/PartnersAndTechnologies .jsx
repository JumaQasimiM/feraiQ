import React from "react";
import MarqueeModule from "react-fast-marquee";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

// Logos
import lidl from "../assets/lidl-seeklogo.png";
import kaufland from "../assets/kaufland.png";
import amazon from "../assets/amazon.png";
import google from "../assets/google.png";
import puma from "../assets/puma.png";
import microsoft from "../assets/Microsoft-Logo.png";
import tiktok from "../assets/tiktok.png";
import facebook from "../assets/facebook.png";
import nike from "../assets/Nike-Logo.png";
const PartnersAndTechnologies = () => {
  const Marquee = MarqueeModule.default || MarqueeModule;

  // TECHNOLOGIES
  const technologies = [
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript size={40} className="text-yellow-400" />,
    },
    { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-sky-400" />,
    },
    { name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
    { name: "Python", icon: <FaPython size={40} className="text-sky-900" /> },
    { name: "MySQL", icon: <SiMysql size={40} className="text-sky-900" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-green-600" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} className="text-emerald-500" />,
    },
  ];

  // CUSTOMERS
  const customers = [
    lidl,
    kaufland,
    amazon,
    google,
    puma,
    nike,
    microsoft,
    tiktok,
    facebook,
  ];

  return (
    <section className="my-24 w-full py-5 md:py-20 z-100 font-quicksand font-extrabold">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm  uppercase tracking-widest ">
            Zusammenarbeit, die Ergebnisse liefert
          </span>

          <h2 className="mt-3 text-2xl md:text-5xl font-extrabold text-slate-900">
            Technologien & Langjährige Kunden
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Mit Fokus auf Qualität und Vertrauen entwickeln wir digitale
            Lösungen, die echte Ergebnisse für Unternehmen schaffen.
          </p>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-16">
          <Marquee speed={30} gradient={false} pauseOnHover>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="mx-2 md:mx-4 px-4 py-2 md:px-8 md:py-5 flex items-center gap-4 rounded border border-slate-300 bg-white/70  shadow-sm cursor-pointer"
              >
                <span>{tech.icon}</span>
                <span className="text-lg font-semibold text-slate-800">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* CUSTOMERS */}
        <div className="mt-10 md:mt-20">
          <Marquee speed={20} direction="right" gradient={false} pauseOnHover>
            {customers.map((customer, index) => (
              <div key={index} className="mx-5 md:mx-8 flex items-center">
                <img
                  src={customer}
                  alt="customer"
                  className="h-12 md:h-20 w-auto object-contain opacity-70 transition hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndTechnologies;

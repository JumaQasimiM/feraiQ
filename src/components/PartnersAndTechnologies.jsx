import React from "react";
import { motion } from "motion/react";
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

// Demo Logos (Portfolio)
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

  const technologies = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={40} className="text-orange-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={40} className="text-blue-600" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={40} className="text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact size={40} className="text-cyan-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-sky-400" />,
    },
    {
      name: "Java",
      icon: <FaJava size={40} className="text-red-600" />,
    },
    {
      name: "Python",
      icon: <FaPython size={40} className="text-sky-900" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql size={40} className="text-sky-900" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-green-600" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} className="text-emerald-500" />,
    },
  ];

  const brands = [
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
    <section className="relative my-12 w-full py-10 md:py-20 font-quicksand">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm uppercase tracking-widest text-[#1E2F97] font-semibold">
            Demo-Projekt für Lern- und Portfoliozwecke
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-slate-900">
            Technologien & Beispielunternehmen
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Dieses Projekt dient ausschließlich Demonstrations- und Lernzwecken.
            Die dargestellten Technologien und Logos werden als visuelle
            Beispiele verwendet.
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-16"
        >
          <Marquee speed={30} gradient={false} pauseOnHover>
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  mx-2
                  md:mx-4
                  flex
                  items-center
                  gap-4
                  rounded
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-3
                  md:px-8
                  md:py-5
                  cursor-pointer
                "
              >
                <motion.span
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                  }}
                >
                  {tech.icon}
                </motion.span>

                <span className="text-lg font-semibold text-slate-800">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        {/* Example Brands */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-16 md:mt-24"
        >
          <Marquee speed={20} direction="right" gradient={false} pauseOnHover>
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
                className="mx-5 md:mx-8 flex items-center"
              >
                <img
                  src={brand}
                  alt="Demo Brand"
                  className="
                    h-12
                    md:h-20
                    w-auto
                    object-contain
                    grayscale
                    opacity-60
                    transition-all
                    duration-300
                    hover:grayscale-0
                    hover:opacity-100
                  "
                />
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-slate-500">
            * Alle dargestellten Marken und Logos dienen ausschließlich zu
            Demonstrationszwecken innerhalb dieses Portfolio-Projekts und
            stellen keine tatsächlichen Kundenbeziehungen oder Partnerschaften
            dar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersAndTechnologies;

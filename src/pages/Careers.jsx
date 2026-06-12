import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "motion/react";
// icons
import {
  FaLaptopCode,
  FaHome,
  FaUsers,
  FaGraduationCap,
  FaHeartbeat,
  FaRocket,
} from "react-icons/fa";

import programming from "../assets/programing.png";
import programming1 from "../assets/programing1.jpg";
import programming2 from "../assets/programing2.jpg";
import programming3 from "../assets/programing4.jpg";
import programming4 from "../assets/programing3.jpg";
import programming5 from "../assets/programing5.jpg";
import ansprochpartner from "../assets/ansprochpartner.jpg";
import { useJobs } from "../hooks/useJobs";

const benefits = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Technologies",
    text: "Arbeiten mit modernen Technologien wie React, Cloud-Lösungen und aktuellen IT-Standards.",
  },
  {
    icon: <FaHome />,
    title: "Flexible Arbeitsmodelle",
    text: "Remote, Hybrid oder im Büro – wir bieten flexible Arbeitsmöglichkeiten.",
  },
  {
    icon: <FaUsers />,
    title: "Starkes Team",
    text: "Offene Kommunikation, gegenseitige Unterstützung und ein wertschätzendes Miteinander.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Weiterbildung",
    text: "Regelmäßige Schulungen, Zertifizierungen und persönliche Entwicklungsmöglichkeiten.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Work-Life-Balance",
    text: "Flexible Arbeitszeiten und eine Unternehmenskultur, die auf Vertrauen basiert.",
  },
  {
    icon: <FaRocket />,
    title: "Karrierechancen",
    text: "Spannende Projekte, Eigenverantwortung und langfristige Entwicklungsperspektiven.",
  },
];
const Careers = () => {
  /** =============fetch data[custom hook] from api=============== */
  // const { data: jobs } = useFetch("http://localhost:5000/jobs");

  /** ==============reqct query======== */
  const { data: jobs = [] } = useJobs();
  return (
    <>
      <div className="relative w-full h-[500px]">
        <img
          src={programming2}
          alt="Karriere"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <span className="uppercase tracking-[4px] text-sm font-medium text-sky-300">
            Karriere bei feraiQ
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold font-quicksand">
            Offene Stellen
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">
            Wir suchen talentierte Menschen, die mit uns die Zukunft der IT
            gestalten möchten. Entdecke unsere offenen Positionen und werde Teil
            unseres Teams.
          </p>

          <button className="mt-8 px-8 py-3 bg-sky-600 hover:bg-sky-700 rounded font-medium transition">
            Jetzt bewerben
          </button>
        </div>
      </div>

      {/* main content */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* MAIN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* JOBS */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="border border-slate-200 rounded bg-white p-6 hover:border-sky-300  "
                >
                  {/* HEADER */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block text-xs font-medium text-sky-700 bg-sky-50 px-3 py-1 rounded-md">
                        {job.type}
                      </span>
                    </div>

                    <span className="text-xs text-slate-500">
                      {job.location}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2 className="text-base font-semibold text-slate-900 leading-snug">
                    {job.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {job.description}
                  </p>

                  {/* FOOTER ACTION */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Vollständige Stelle ansehen
                    </span>

                    <button className="text-sm font-medium text-sky-600 hover:text-sky-700 transition">
                      <Link to={job.slug}>Bewerben →</Link>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CONTACT BOX */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className=" h-fit"
            >
              <h3 className="text-lg font-semibold">Deine Ansprechpartnerin</h3>

              <img
                src={ansprochpartner}
                alt=""
                className="h-[300px] w-full mt-4 mb-4 lg:object-cover object-contain"
              />

              <p className="text-sm text-slate-600 leading-relaxed">
                Du hast Fragen zum Bewerbungsprozess oder zu offenen Stellen?
                Unsere HR Ansprechpartnerin hilft dir gerne weiter.
              </p>

              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <p className="font-semibold">Mohammad Juma Qasimi</p>
                <p>jobs@feraiq.de</p>
                <p>0049 876 893 458</p>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
            {benefits.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="p-8 border border-gray-200 rounded-lg bg-white "
              >
                <div className="flex justify-center">
                  <h1 className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 text-2xl">
                    {item.icon}
                  </h1>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <div className="mt-24 bg-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                programming,
                programming1,
                programming2,
                programming3,
                programming4,
                programming5,
              ].map((img, i) => (
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={i}
                  src={img}
                  className="h-58 w-full object-cover "
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;

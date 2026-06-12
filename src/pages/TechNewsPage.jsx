import React from "react";
import { motion } from "framer-motion";

const news = [
  {
    title: "KI verändert die Softwareentwicklung nachhaltig",
    desc: "Unternehmen setzen zunehmend auf künstliche Intelligenz zur Optimierung ihrer Prozesse.",
    tag: "KI",
  },
  {
    title: "Cloud-Infrastruktur wird zum Standard",
    desc: "Skalierbare Cloud-Lösungen ersetzen klassische Server-Strukturen in Unternehmen.",
    tag: "Cloud",
  },
  {
    title: "Cybersecurity bleibt Top-Priorität",
    desc: "IT-Sicherheit gewinnt durch steigende Bedrohungen immer mehr an Bedeutung.",
    tag: "Security",
  },
  {
    title: "Moderne Webentwicklung mit React",
    desc: "React bleibt eines der wichtigsten Tools im Frontend-Development.",
    tag: "Web",
  },
  {
    title: "DevOps beschleunigt IT-Prozesse",
    desc: "Automatisierung verbessert Deployment und Softwarequalität erheblich.",
    tag: "DevOps",
  },
  {
    title: "Data Analytics für bessere Entscheidungen",
    desc: "Unternehmen nutzen Daten, um strategisch bessere Entscheidungen zu treffen.",
    tag: "Data",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TechNewsGermany = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm tracking-[3px] uppercase text-gray-500">
          IT News Deutschland
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 font-quicksand">
          Technologie & Innovation
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Aktuelle Entwicklungen aus den Bereichen KI, Cloud, IT-Security und
          Softwareentwicklung.
        </p>
      </div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {news.map((item, i) => (
          <motion.div
            key={i}
            variants={item}
            className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* TAG */}
            <span className="text-xs font-semibold text-blue-600 uppercase">
              {item.tag}
            </span>

            {/* TITLE */}
            <h2 className="mt-3 text-xl font-bold text-gray-900 leading-snug">
              {item.title}
            </h2>

            {/* DESC */}
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* READ MORE */}
            <button className="mt-5 text-blue-600 font-medium hover:underline">
              Mehr lesen →
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechNewsGermany;

import React from "react";
import { motion } from "framer-motion";
import programming from "../assets/programing.png";
import programming1 from "../assets/programing1.jpg";
import programming2 from "../assets/programing2.jpg";
import programming3 from "../assets/programing4.jpg";
import programming4 from "../assets/programing3.jpg";
import programming5 from "../assets/programing5.jpg";
import ansprochpartner from "../assets/ansprochpartner.jpg";
import { Link } from "react-router-dom";
import { useNews } from "../hooks/useNews";

// ======= start animation motion ======

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

// =========== end animation montin =====
const TechNewsGermany = () => {
  // get data
  const { data } = useNews();
  const news = data?.news || [];

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
            className="border border-gray-200 rounded p-6 bg-white "
          >
            <div>
              <img
                src={item.image}
                alt=""
                className="hover:scale-103 transition-all duration-300"
              />
            </div>
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
            <Link to={`/news/${item.slug}`}>
              <button className="mt-5 text-blue-600 font-medium hover:underline">
                Mehr lesen →
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechNewsGermany;

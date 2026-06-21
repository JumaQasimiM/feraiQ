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
import { useTranslation } from "react-i18next";

const benefits = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Technologies",
    text: "Arbeiten mit modernen Technologien wie React, Cloud-Lösungen und aktuellen IT-Standards.",
  },
  {
    icon: <FaHome />,
    title: "flexible_working_models",
    text: "Remote, Hybrid oder im Büro – wir bieten flexible Arbeitsmöglichkeiten.",
  },
  {
    icon: <FaUsers />,
    title: "strong_team",
    text: "Offene Kommunikation, gegenseitige Unterstützung und ein wertschätzendes Miteinander.",
  },
  {
    icon: <FaGraduationCap />,
    title: "professional_development",
    text: "Regelmäßige Schulungen, Zertifizierungen und persönliche Entwicklungsmöglichkeiten.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Work-Life-Balance",
    text: "Flexible Arbeitszeiten und eine Unternehmenskultur, die auf Vertrauen basiert.",
  },
  {
    icon: <FaRocket />,
    title: "career_opportunities",
    text: "Spannende Projekte, Eigenverantwortung und langfristige Entwicklungsperspektiven.",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageAnim = {
  hidden: { scale: 1.05, opacity: 0.5 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};
const Careers = () => {
  const [filter, setFilter] = useState("all");
  // pagenation - client side pagenation
  const [page, setPage] = useState(1);
  const perPage = 5;
  /** ==============reqct query======== */
  const { data } = useJobs(filter);
  console.log(filter);
  const jobs = data?.jobs || [];

  // pagenation
  const startPage = (page - 1) * perPage;
  const paginatedJobs = jobs.slice(startPage, startPage + perPage);
  const totalPages = Math.ceil(jobs.length / perPage);

  // filter item
  const filterItem = ["all", "Part-time", "Full-time"];
  // localization
  const { t } = useTranslation();
  return (
    <>
      {/* herder */}
      <motion.div
        className="relative w-full h-[500px] overflow-hidden"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Background Image */}
        <motion.img
          src={programming2}
          alt="Karriere"
          className="w-full h-full object-cover"
          variants={imageAnim}
        />

        {/* Overlay */}
        <motion.div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
          variants={container}
        >
          <motion.span
            variants={item}
            className="uppercase tracking-[4px] text-sm font-medium text-gray-200"
          >
            {t("careers_at_feraiQ")}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl md:text-6xl font-bold font-quicksand"
          >
            {t("open_positions")}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed"
          >
            Wir suchen talentierte Menschen, die mit uns die Zukunft der IT
            gestalten möchten. Entdecke unsere offenen Positionen und werde Teil
            unseres Teams.
          </motion.p>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-8 py-3 bg-[#1E2F97] hover:bg-[#2339c3] rounded font-medium transition"
          >
            {t("apply_now")}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* main content */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* MAIN LAYOUT */}
          {/* filter section */}
          <div className="flex justify-start items-center gap-5 mb-3 cursor-pointer">
            {filterItem.map((item, index) => (
              <button
                key={index}
                onClick={() => setFilter(item)}
                className={`py-1 px-3 transition-all cursor-pointer mb-3 ${
                  filter === item
                    ? "bg-[#1c2ea5] text-white font-semibold"
                    : "bg-[#263dd2] text-white"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* JOBS */}

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedJobs.map((job, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="h-50 border border-slate-200 rounded bg-white p-6 hover:border-[#263dd2]  "
                >
                  {/* HEADER */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block text-xs font-medium text-white bg-[#3b489a] px-3 py-1 rounded">
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

                    <button className="text-sm font-medium text-[#1E2F97] hover:text-[#2d41c4] transition">
                      <Link to={job.slug}>{t("apply")} →</Link>
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
              <h3 className="text-lg font-semibold">
                {t("your_contact_person")}
              </h3>

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
            {/* pagenation */}
            <div className="flex gap-2 mt-5">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  onClick={() => setPage(i + 1)}
                  key={i}
                  className="px-3 py-1 rounded font-semibold border bg-sky-800 text-white cursor-pointer"
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* benefits */}
          <div className="my-24">
            <h1 className="my-2 md:my-4 font-quicksand font-semibold text-xl md:text-4xl">
              {t("benefits")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
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
                    <h1 className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center text-[#1E2F97] text-2xl">
                      {item.icon}
                    </h1>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {t(item.title)}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
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

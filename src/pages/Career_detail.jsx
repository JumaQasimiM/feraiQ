import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

// assets
import programing from "../assets/programing.png";

// hooks
import { useJob } from "../hooks/useJobs";

// components
import { Aboutus_careere_detail } from "../components/smallComponents/Aboutus_careere_detail";

/* ---------------- VARIANTS ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- SAFE SECTION ---------------- */

const Section = ({ title, items }) => {
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <motion.div variants={fadeUp}>
      <h2 className="font-quicksand font-semibold mb-5 text-lg">{title}</h2>

      <ul className="space-y-3 text-slate-700 ml-10 list-disc">
        {safeItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

/* ---------------- MAIN ---------------- */

const Career_detail = () => {
  const { slug } = useParams();
  const { data: job, isLoading, isError } = useJob(slug);

  /* loading */
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-slate-500">
        Loading job details...
      </div>
    );
  }

  /* errorr */
  if (isError || !job) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-red-500">
        Job nicht gefundet.
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="max-w-7xl mx-auto px-6"
    >
      {/* HERO IMAGE */}
      <motion.div variants={fadeUp} className="overflow-hidden rounded-lg">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={programing}
          alt={job?.title}
          className="w-full h-[350px] object-cover"
        />
      </motion.div>

      {/* TITLE */}
      <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-semibold py-6">
        {job?.title} (m/w/d)
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* MAIN CONTENT */}
        <motion.div variants={container} className="lg:col-span-2 space-y-10">
          {job?.tasks && <Section title="Deine Aufgaben" items={job.tasks} />}
          {job?.profile && <Section title="Dein Profil" items={job.profile} />}
          {job?.benefits && <Section title="Benefits" items={job.benefits} />}
          {/* Social Media */}{" "}
          <div className="flex items-center gap-3 pt-6">
            {" "}
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all duration-300"
            >
              {" "}
              <FaFacebook size={18} />{" "}
            </a>{" "}
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300"
            >
              {" "}
              <FaInstagram size={18} />{" "}
            </a>{" "}
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300"
            >
              {" "}
              <FaLinkedin size={18} />{" "}
            </a>{" "}
            <a
              href="mailto:info@feraiq.de"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300"
            >
              {" "}
              <TfiEmail size={18} />{" "}
            </a>{" "}
          </div>
          {/* ctA */}
          <motion.a variants={fadeUp} href="mailto:bewerbung@feraiq.de">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full mt-6 bg-sky-600 text-white py-3 rounded-lg"
            >
              Jetzt bewerben
            </motion.button>
          </motion.a>
        </motion.div>

        {/* sidebar- */}
        <motion.div variants={fadeUp}>
          <Aboutus_careere_detail />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Career_detail;

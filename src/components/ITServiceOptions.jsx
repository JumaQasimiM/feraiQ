import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
const services = [
  {
    title: "IT-Abteilung ersetzen",
    desc: "Sie möchten Ihre interne IT durch einen IT-Dienstleister ersetzen?",
    link: "/services",
  },
  {
    title: "IT-Dienstleister wechseln",
    desc: "Sie sind unzufrieden mit Ihrem bisherigen IT-Dienstleister und wollen wechseln?",
    link: "/services",
  },
  {
    title: "Spezial-Support",

    desc: "Sie suchen Unterstützung für Ihre interne IT in Spezialthemen?",
    link: "/services",
  },
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ITServiceOptions = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center  font-quicksand font-extrabold"
      >
        <span className="text-sm uppercase tracking-widest text-brand-color">
          Ihr zuverlässiger IT-Partner vor Ort
        </span>

        <h2 className="mt-4 text-2xl leading-tight text-slate-900 md:text-5xl ">
          Kontinuierliche IT-Betreuung und Support
        </h2>

        <p className="mt-4 text-lg text-slate-700 md:text-xl text-center">
          Individuell auf die Bedürfnisse Ihres Unternehmens zugeschnitten.
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg ">
          Suchen Sie einen zuverlässigen Partner für die kontinuierliche
          Betreuung Ihrer IT-Infrastruktur? Mit flexiblen Vertragsmodellen und
          individuellen Servicekonzepten bieten wir passgenaue IT-Lösungen für
          die Anforderungen Ihres Unternehmens.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ITServiceOptions;

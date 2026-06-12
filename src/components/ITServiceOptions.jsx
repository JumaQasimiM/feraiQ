import React from "react";
import { motion } from "motion/react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Sie möchten Ihre interne IT durch einen IT-Dienstleister ersetzen?",
    link: "/services",
  },
  {
    title:
      "Sie sind unzufrieden mit Ihrem bisherigen IT-Dienstleister und wollen wechseln?",
    link: "/services",
  },
  {
    title: "Sie suchen Unterstützung für Ihre interne IT in Spezialthemen?",
    link: "/services",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ITServiceOptions = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="mx-auto max-w-4xl text-center font-quicksand font-extrabold"
      >
        <span className="text-sm uppercase tracking-widest text-brand-color">
          Ihr zuverlässiger IT-Partner vor Ort
        </span>

        <h2 className="mt-4 text-3xl leading-tight text-slate-900 md:text-5xl">
          Kontinuierliche IT-Betreuung und Support
        </h2>

        <p className="mt-4 text-lg text-slate-700 md:text-xl">
          Individuell auf die Bedürfnisse Ihres Unternehmens zugeschnitten.
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          Suchen Sie einen zuverlässigen Partner für die kontinuierliche
          Betreuung Ihrer IT-Infrastruktur? Mit flexiblen Vertragsmodellen und
          individuellen Servicekonzepten bieten wir passgenaue IT-Lösungen für
          die Anforderungen Ihres Unternehmens.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard title={service.title} link={service.link} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ITServiceOptions;

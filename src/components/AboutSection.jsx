import React from "react";
import { motion } from "motion/react";
import kabl from "../assets/kabl.png";
import { Link } from "react-router-dom";

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
    y: 20,
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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
    x: 30,
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <h2 className="text-center text-2xl font-semibold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
          Fokussieren Sie sich auf Ihr Kerngeschäft
          <br className="hidden md:block" />
          <span className="text-slate-700"> – wir kümmern uns um Ihre IT.</span>
        </h2>
      </motion.div>

      {/* Content */}
      <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="order-2 lg:order-1"
        >
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Seit 2024 unterstützen wir Unternehmen mit professionellen
            IT-Services. Unser Ansatz ist einfach: maßgeschneiderte Lösungen,
            die sich konsequent an den individuellen Anforderungen unserer
            Kunden und Branchen orientieren.
            <br />
            <br />
            Dank unserer Erfahrung und der Zusammenarbeit mit Unternehmen
            unterschiedlichster Branchen verfügen wir über ein breites Fundament
            an Best Practices, um zuverlässige, effiziente und praxiserprobte
            Lösungen bereitzustellen.
            <br />
            <br />
            Wir übernehmen genau die Rolle, die Ihr Unternehmen benötigt: als
            externe IT-Abteilung, als spezialisierte Unterstützung für Ihr
            internes IT-Team oder als strategischer Partner für Geschäftsführung
            und Entscheidungsträger.
            <br />
            <br />
            Als IT-Dienstleister mit Sitz in Öhringen betreuen wir Kunden
            regional sowie weltweit – zuverlässig, schnell und persönlich.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <Link to={"/contact"}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                rounded
                bg-[#1E2F97]
                px-7
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[#162377]
                hover:shadow-lg
              "
              >
                Zu unseren Leistungen
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="order-1 flex justify-center lg:order-2 "
        >
          <img
            src={kabl}
            alt="IT Services"
            className="
              w-full
              md:w-full
              max-w-lg
              h-auto
              rounded
              object-cover
              shadow-xl
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

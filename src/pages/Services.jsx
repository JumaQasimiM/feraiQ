import React from "react";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

import ITServiceOptions from "../components/ITServiceOptions";
import ContactUs from "./ContactUs";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section className="w-full">
      {/* Services */}
      <div className="max-w-7xl mx-auto -mt-15">
        <ITServiceOptions />
      </div>

      {/* About Services */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="bg-white"
      >
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-quicksand md:text-4xl font-bold text-slate-900 mb-8">
            Warum feraiQ?
          </h2>

          <div className="space-y-6 text-slate-600 leading-8 text-lg">
            <p>
              Wir unterstützen Unternehmen mit professionellen IT-Services und
              einem klaren Fokus auf nachhaltige Lösungen, persönliche Betreuung
              und moderne Technologien.
            </p>

            <p>
              Ob IT-Infrastruktur, Cloud-Lösungen, Support oder strategische
              Beratung – wir entwickeln Konzepte, die exakt auf die
              Anforderungen Ihres Unternehmens zugeschnitten sind.
            </p>

            <p>
              Durch unsere Erfahrung aus unterschiedlichsten Projekten
              profitieren unsere Kunden von bewährten Prozessen, effizienten
              Abläufen und praxisnahen Lösungen.
            </p>

            <p>
              Unser Ziel ist es, IT einfach, sicher und effizient zu gestalten,
              damit Sie sich vollständig auf Ihr Kerngeschäft konzentrieren
              können.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
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
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
        className="bg-[#1E2F97]"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Benötigen Sie Unterstützung?
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-lg">
            Unser Team berät Sie gerne zu Ihren IT-Anforderungen und entwickelt
            gemeinsam mit Ihnen die passende Lösung.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-lg
              bg-white
              px-8
              py-4
              font-semibold
              text-[#1E2F97]
              shadow-lg
            "
          >
            Jetzt Kontakt aufnehmen
            <motion.span
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              <FaArrowDownLong />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Contact */}
      <div className="max-w-7xl mx-auto px-6 md:py-20">
        <ContactUs />
      </div>
    </section>
  );
};

export default Services;

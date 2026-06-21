import React from "react";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

import ITServiceOptions from "../components/ITServiceOptions";
import ContactUs from "./ContactUs";
import { useTranslation } from "react-i18next";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ---------------- SERVICES DATA ---------------- */

const services = [
  {
    title: "IT-Support",
    desc: "Schnelle Hilfe bei technischen Problemen – remote oder vor Ort.",
  },
  {
    title: "cloud_solutions",
    desc: "Moderne Cloud-Infrastruktur für flexible und sichere IT-Systeme.",
  },
  {
    title: "it_security",
    desc: "Schutz Ihrer Daten durch Firewalls, Backup & Security-Lösungen.",
  },
  {
    title: "it_beratung",
    desc: "Strategische Planung Ihrer gesamten IT-Infrastruktur.",
  },
  {
    title: "network_infr",
    desc: "Aufbau und Wartung stabiler Unternehmensnetzwerke.",
  },
  {
    title: "Managed Services",
    desc: "Komplette Betreuung Ihrer IT – zuverlässig und proaktiv.",
  },
  {
    title: "Web Development",
    desc: "Moderne, schnelle und responsive Webseiten für Unternehmen.",
  },
];

/* ---------------- COMPONENT ---------------- */

const Services = () => {
  // localization
  const { t } = useTranslation();
  return (
    <section className="w-full">
      {/* HERO SERVICES BLOCK */}
      <div className="max-w-7xl mx-auto -mt-15">
        <ITServiceOptions />
      </div>

      {/* SERVICES GRID */}
      <section className="w-full bg-[#1E2F97] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-5xl font-bold font-quicksand">
              {t("our_it_services")}
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Wir bieten ganzheitliche IT-Lösungen für Unternehmen jeder Größe –
              von Support bis komplette Infrastruktur.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded"
              >
                <h3 className="text-xl font-semibold">{t(item.title)}</h3>
                <p className="mt-3 text-white/80 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white"
      >
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-bold font-quicksand text-slate-900 mb-8">
            {t("why")} feraiQ?
          </h2>

          <div className="space-y-6 text-slate-600 leading-8 text-lg">
            <p>{t("w1")}</p>
            <p>{t("w2")}</p>
            <p>{t("w3")}</p>
            <p>{t("w4")}</p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#1E2F97]"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-quicksand">
            {t("do_u_need_support")}
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-lg">
            Wir entwickeln die passende IT-Lösung für Ihr Unternehmen.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
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
            {t("contact_now")}
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaArrowDownLong />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* CONTACT */}
      <div className="max-w-7xl mx-auto md:px-6 md:py-20">
        <ContactUs />
      </div>
    </section>
  );
};

export default Services;

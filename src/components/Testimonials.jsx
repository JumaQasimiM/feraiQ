import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";

import bgTestmonial from "../assets/bg-testmonial.jpg";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    customerName: "Juma Qasimi",
    subject: "Zuverlässiger IT-Partner",
    content:
      "Die Zusammenarbeit mit feraiQ verläuft äußerst professionell und zuverlässig. Anfragen werden schnell bearbeitet und Lösungen effizient umgesetzt.",
  },
  {
    customerName: "Mohammad Juma",
    subject: "Sehr kompetenter Service",
    content:
      "Dank feraiQ können wir uns auf unser Kerngeschäft konzentrieren. Das Team reagiert schnell und sorgt für einen stabilen IT-Betrieb.",
  },
  {
    customerName: "Qasimi",
    subject: "Top IT Support",
    content:
      "Besonders hervorzuheben sind die schnelle Unterstützung, die hohe Fachkompetenz und die persönliche Betreuung.",
  },
  {
    customerName: "Mohammad",
    subject: "Starke IT-Partnerschaft",
    content:
      "Von der täglichen Betreuung bis hin zu komplexen Projekten erhalten wir stets professionelle Unterstützung.",
  },
  {
    customerName: "Mohammad Qasimi",
    subject: "Hervorragende Betreuung",
    content:
      "Transparent, zuverlässig und lösungsorientiert – genau so wünschen wir uns einen IT-Dienstleister.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // localization
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden min-h-[88vh] py-12 md:py-24">
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgTestmonial})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="text-white"
          >
            <span className="text-sm uppercase tracking-widest font-semibold text-sky-300">
              {t("customer_testimonials")}
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              {t("what_say")}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Vertrauen, Zuverlässigkeit und langfristige Zusammenarbeit stehen
              bei uns im Mittelpunkt.
              <br />
              <br />
              Unsere Kunden profitieren von schnellen Reaktionszeiten,
              persönlicher Betreuung und praxisnahen IT-Lösungen.
            </p>
          </motion.div>

          {/* Slider */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div
              className="relative flex min-h-[320px] items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 80,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -80,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className="w-full md:w-[75%]"
                >
                  <TestimonialCard {...testimonials[index]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="mt-10 flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`testimonial-${i}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-10 h-2.5 bg-[#1E2F97] "
                      : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

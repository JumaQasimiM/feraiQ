import React from "react";
import TestimonialCard from "./TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

import bgTestmonial from "../assets/bg-testmonial.jpg";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      customerName: "Martin",
      subject: "Zuverlässiger IT-Partner",
      content:
        "Die Zusammenarbeit mit feraiQ verläuft seit Jahren äußerst professionell und zuverlässig. Anfragen werden schnell bearbeitet und Lösungen effizient umgesetzt. Besonders schätzen wir die kompetente Beratung und die hohe Servicequalität.",
    },
    {
      customerName: "Mohammad Juma",
      subject: "Sehr kompetenter Service",
      content:
        "Dank feraiQ können wir uns voll auf unser Kerngeschäft konzentrieren. Das Team reagiert schnell auf Anfragen, arbeitet lösungsorientiert und sorgt dafür, dass unsere IT-Infrastruktur jederzeit stabil und sicher läuft.",
    },
    {
      customerName: "Qasimi",
      subject: "Top IT Support",
      content:
        "Wir sind mit dem Service von feraiQ sehr zufrieden. Das Team verfügt über umfangreiches Fachwissen und unterstützt uns zuverlässig bei allen technischen Herausforderungen. Besonders hervorzuheben ist die persönliche und freundliche Betreuung.",
    },
    {
      customerName: "Mohammad",
      subject: "Starke IT-Partnerschaft",
      content:
        "feraiQ begleitet unser Unternehmen seit mehreren Jahren als vertrauenswürdiger IT-Partner. Von der täglichen Betreuung bis hin zu komplexen Projekten erhalten wir stets professionelle Unterstützung und maßgeschneiderte Lösungen.",
    },
    {
      customerName: "Sarah Klein",
      subject: "Hervorragende Betreuung",
      content:
        "Die Zusammenarbeit mit feraiQ hat unsere internen Prozesse deutlich verbessert. Das Team arbeitet zuverlässig, transparent und mit einem hohen Qualitätsanspruch. Wir fühlen uns jederzeit bestens betreut.",
    },
    {
      customerName: "Thomas Becker",
      subject: "Kompetent und lösungsorientiert",
      content:
        "Ob Support-Anfragen, Systemwartung oder strategische IT-Beratung – feraiQ überzeugt durch Kompetenz und Engagement. Probleme werden schnell analysiert und nachhaltig gelöst. Eine Zusammenarbeit, die wir jederzeit weiterempfehlen würden.",
    },
  ];
  useEffect(() => {
    if (!testimonials.length) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) return null;
  return (
    <section
      className="relative w-full min-h-[88vh] bg-cover bg-center py-10 md:py-20"
      style={{ backgroundImage: `url(${bgTestmonial})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
        {/* LEFT TEXT */}
        <div className="text-white">
          <h2 className="text-sm font-semibold font-quicksand uppercase tracking-widest">
            Kundenstimmen
          </h2>

          <h1 className="mt-3 text-3xl font-bold  font-quicksand leading-tight">
            Was sagen unsere Kunden?
          </h1>

          <p className="mt-6 text-lg font-semibold leading-relaxed text-white/80">
            Seit 2025 machen wir IT mit Herzblut. Wir orientieren uns an den
            individuellen Bedürfnissen unserer Kunden und seiner Branche.
            <br />
            <br />
            Aufgrund unserer langjährigen Erfahrung und Kunden aus nahezu allen
            Bereichen können wir auf einen großen Fundus an Best Practices
            zurückgreifen.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="md:col-span-2 grid grid-cols-1 ">
          {/* ================= SLIDER ================= */}
          <div className="relative min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 150, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.96 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[90%] md:w-[70%]"
              >
                {/* <TestimonialCard
                  subject={testimonials[index].subject}
                  customerName={testimonials[index].customerName}
                  content={testimonials[index].content}
                /> */}
                <TestimonialCard {...testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-10 bg-sky-700 shadow-[0_0_20px_rgba(99,102,241,0.7)]"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

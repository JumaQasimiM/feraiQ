import React from "react";
import { motion } from "motion/react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { FiFileText } from "react-icons/fi";
import { BiTimer } from "react-icons/bi";

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
    y: 30,
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

const WhyChooseUs = () => {
  const whyChooseUsItem = [
    {
      title: "Fundiertes IT-Know-how",
      description:
        "Wir unterstützen Unternehmen mit professionellen IT-Lösungen und einem klaren Fokus auf langfristige Partnerschaften.",
      icon: <FiFileText size={50} />,
    },
    {
      title: "Schnelle Reaktionszeiten",
      description:
        "Erreichbarkeit und schnelle Unterstützung sind für uns selbstverständlich – bei Bedarf auch außerhalb üblicher Geschäftszeiten.",
      icon: <BiTimer size={50} />,
    },
    {
      title: "Lösungsorientierte Arbeitsweise",
      description:
        "Wir lösen IT-Herausforderungen effizient, wirtschaftlich und mit Blick auf Ihre Geschäftsziele.",
      icon: <FiFileText size={50} />,
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center font-quicksand"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Warum Sie sich
            <br />
            für feraiQ entscheiden sollten
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {whyChooseUsItem.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <WhyChooseUsCard
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="mt-14 text-center"
        >
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
              px-10
              py-4
              text-white
              font-medium
              shadow-lg
            "
          >
            Jetzt beraten lassen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

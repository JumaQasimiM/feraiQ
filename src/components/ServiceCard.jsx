import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};
const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={containerVariants}
      className="text-center group flex flex-col justify-between rounded bg-white p-10 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <motion.div an>
        <h3 className="text-xl font-semibold text-slate-900 leading-snug ">
          {service.title}
        </h3>
        <h6>{service.desc}</h6>
      </motion.div>

      <motion.Link
        to={service.link}
        className="mt-8 inline-flex items-center justify-center rounded bg-[#1E2F97] px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-[#17257a]"
      >
        Mehr erfahren
      </motion.Link>
    </motion.div>
  );
};

export default ServiceCard;

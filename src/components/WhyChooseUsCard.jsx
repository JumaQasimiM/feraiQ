import React from "react";
import { motion } from "framer-motion";

const WhyChooseUsCard = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded border border-slate-200 bg-white p-8 text-center shadow-sm hover:shadow-xl"
    >
      <div className="mb-5 flex justify-center text-5xl text-brand-color">
        {icon}
      </div>

      <h3 className="mb-4 text-xl font-bold text-slate-900">{title}</h3>

      <p className="leading-relaxed text-slate-600">{description}</p>
    </motion.div>
  );
};

export default WhyChooseUsCard;

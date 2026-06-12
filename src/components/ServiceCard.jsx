import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MotionLink = motion(Link); // to make animate useing motion

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const cardVariants = {
  // hidden: {
  //   opacity: 0,
  //   y: 20,
  // },
  // show: {
  //   opacity: 1,
  //   y: 0,
  //   transition: {
  //     duration: 0.6,
  //     ease: "easeOut",
  //   },
  // },
};
const ServiceCard = ({ title, link }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="text-center group flex flex-col justify-between rounded bg-white p-10 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <motion.div variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-slate-900 leading-snug ">
            {title}
          </h3>
        </motion.div>

        <MotionLink
          variants={itemVariants}
          to={link}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#1E2F97] px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-[#17257a]"
        >
          Mehr erfahren
        </MotionLink>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;

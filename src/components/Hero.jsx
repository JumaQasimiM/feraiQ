import programing from "../assets/programing.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
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
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  // tranlation
  const { t } = useTranslation();
  return (
    <section className="relative h-[95vh] md:h-[90vh] overflow-hidden bg-gradient-to-br from-[#1E2F97] via-[#2d46c5] to-[#3c63ff]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/*  background */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.08,
        }}
        animate={{
          opacity: 0.9,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-no-repeat bg-cover z-[2]"
        style={{
          backgroundImage: `url(${programing})`,
        }}
      />

      {/* content */}
      <div className="relative z-20 h-full flex items-center justify-center lg:justify-end px-4 md:px-10">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className="
            max-w-3xl
            backdrop-blur-2xl
            bg-white/5
            border border-white/20
            rounded
            p-8 md:p-10
            shadow-2xl
          "
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="
                inline-block
                px-4 py-2
                rounded-full
                bg-white/10
                border border-white/20
                text-white
                text-sm
                mb-6
              "
            >
              Dein IT-Systemhaus in Öhringen
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="
                text-lg
                md:text-4xl
                font-bold
                text-white
                leading-tight
                font-quicksand
              "
            >
              Zuverlässige IT für
              <br />
              Unternehmen in deiner Region
            </motion.h1>

            {/* Desktop Text */}
            <motion.p
              variants={itemVariants}
              className="
                mt-6
                text-white/80
                text-lg
                leading-relaxed
                hidden md:block
              "
            >
              Von IT-Support über Cloud-Lösungen bis hin zur kompletten
              Systembetreuung – wir sorgen dafür, dass Ihre IT zuverlässig und
              zukunftssicher funktioniert.
            </motion.p>

            {/* Mobile Text */}
            <motion.p
              variants={itemVariants}
              className="
                mt-2
                text-white/80
                text-lg
                leading-relaxed
                md:hidden
              "
            >
              IT-Support, Cloud & Sicherheit aus einer Hand.
            </motion.p>

            {/* Desktop Benefits */}
            <motion.ul
              variants={itemVariants}
              className="
                mt-8
                space-y-4
                text-white/90
                hidden md:block
              "
            >
              <li>
                ✓ Schneller IT-Support – kompetente Hilfe, wenn Sie sie brauchen
              </li>

              <li>
                ✓ Transparente Betreuung – volle Kontrolle über Systeme, Kosten
                und Verträge
              </li>

              <li>✓ Moderne Hardware & Software – alles aus einer Hand</li>
            </motion.ul>

            {/* Mobile Benefits */}
            <motion.ul
              variants={itemVariants}
              className="
                mt-8
                space-y-1
                text-white/90
                md:hidden
              "
            >
              <li>✓ Schneller IT-Support</li>
              <li>✓ Transparente Betreuung</li>
              <li>✓ Hardware & Software aus einer Hand</li>
              <li>✓ Höchste Datensicherheit</li>
            </motion.ul>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="
                mt-10
                flex
                flex-col
                md:flex-row
                md:items-center
                gap-6
              "
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    px-4
                    md:px-8
                    py-1
                    md:py-4
                    rounded
                    bg-white
                    text-[#1E2F97]
                    font-semibold
                    shadow-lg
                  "
                >
                  {t("free_consultation")}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent z-10" />
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

import logo from "../assets/logo-1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItem = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "EN", path: "/en" },
    { name: "DE", path: "/de" },
  ];

  return (
    <section className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-36 md:w-40 object-contain" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 font-quicksand font-semibold">
            {navItem.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative group text-sm tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-sky-500"
                        : "text-[#374151] hover:text-sky-500"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`
                          absolute left-1/2 -translate-x-1/2 -bottom-1
                          h-[2px] bg-sky-500 rounded-full
                          transition-all duration-300
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            <button
              className="
                bg-gradient-to-r
                from-sky-500
                to-blue-700
                text-white
                py-1 px-6
                rounded-2xl
                font-medium
                shadow-lg shadow-blue-500/20
                transition-all duration-300
                hover:scale-105
                hover:shadow-blue-500/40
                active:scale-95
              "
            >
              Sign In
            </button>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            className="
              bg-gradient-to-r
              from-sky-500
              to-blue-600
              text-white
              py-1 px-5
              rounded-xl
              text-sm
              font-medium
              shadow-lg
            "
          >
            Sign In
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-700"
          >
            <FaBarsStaggered size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: -0 }}
              exit={{ y: "100%" }}
              transition={{
                duration: 0.55,
                ease: "easeInOut",
              }}
              className="
                fixed top-0 right-0
                w-full max-w-sm
                min-h-screen
                bg-white/95
                backdrop-blur-xl
                shadow-2xl
                z-50
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <img src={logo} alt="logo" className="w-28" />

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-gray-500 hover:text-red-500 transition"
                >
                  <FaXmark />
                </button>
              </div>

              {/* User Card */}
              <div className="mx-4 mt-6 p-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <FaUser size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Welcome</h3>
                    <p className="text-sm text-white/80">Sign in to continue</p>
                  </div>
                </div>
              </div>

              {/* Nav Links */}
              <ul className="mt-8 px-6">
                {navItem.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center py-4 border-b border-gray-100 transition-all duration-300 ${
                          isActive
                            ? "text-sky-500 font-semibold"
                            : "text-gray-700 hover:text-sky-500"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;

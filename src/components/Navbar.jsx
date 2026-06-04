import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

import logo from "../assets/logo-1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Startseite", path: "/" },
    { name: "Leistungen", path: "/services" },
    { name: "Projekte", path: "/projects" },
    { name: "Über uns", path: "/about" },
    { name: "Kontakt", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      {" "}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}{" "}
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt="FeraiQ Logo"
            className="w-32 object-contain md:w-36"
          />{" "}
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative transition-colors duration-300 ${
                      isActive
                        ? "text-sky-600"
                        : "text-gray-700 hover:text-sky-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-sky-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            <Link
              to="/contact"
              className="
            rounded
            bg-gradient-to-r
            from-sky-500
            to-blue-700
            px-6
            py-2.5
            font-medium
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
          "
            >
              Kostenlose Beratung
            </Link>
          </ul>
        </nav>
        {/* Mobile Navigation */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/contact"
            className="
          rounded
          bg-gradient-to-r
          from-sky-500
          to-blue-700
          px-4
          py-2
          text-sm
          font-medium
          text-white
        "
          >
            Beratung
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-700"
            aria-label="Open Menu"
          >
            <FaBarsStaggered size={22} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="
            fixed
            top-0
            right-0
            z-50
            h-screen
            w-full
            max-w-sm
            bg-white
            shadow-2xl
          "
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-5">
                <img
                  src={logo}
                  alt="FeraiQ Logo"
                  className="w-28 object-contain"
                />

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-gray-500 transition hover:text-red-500"
                >
                  <FaXmark />
                </button>
              </div>

              {/* User Card */}
              <div className="mx-4 mt-6 rounded bg-gradient-to-r from-sky-500 to-blue-700 p-5 text-white">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <FaUser />
                  </div>

                  <div>
                    <h3 className="font-semibold">FeraiQ IT Solutions</h3>

                    <p className="text-sm text-white/80">
                      Software • Webentwicklung • KI
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <ul className="mt-8 px-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block border-b border-gray-100 py-4 transition-all duration-300 ${
                          isActive
                            ? "font-semibold text-sky-600"
                            : "text-gray-700 hover:text-sky-600"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="px-6 pt-8">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                block
                rounded
                bg-gradient-to-r
                from-sky-500
                to-blue-700
                py-3
                text-center
                font-medium
                text-white
                shadow-lg
                transition
                hover:scale-[1.02]
              "
                >
                  Unverbindlich beraten lassen
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

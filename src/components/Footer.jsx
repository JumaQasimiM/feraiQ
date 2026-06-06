import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo-1.png";
const Footer = () => {
  const navigation = [
    { name: "Startseite", link: "/" },
    { name: "Leistungen", link: "/services" },
    { name: "Karriere", link: "/careers" },
    { name: " Kontakt", link: "/contact" },
  ];
  return (
    <footer className="bg-slate-950 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-sky-500">
              <img src={logo} alt="logo" className="w-30 " />
            </h2>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Ihr zuverlässiger Partner für moderne IT-Lösungen, Support,
              Infrastruktur und digitale Transformation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold">Navigation</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              {navigation.map((nav, index) => (
                <li key={index}>
                  <a href={nav.link} className="hover:text-sky-700">
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Kontakt</h3>

            <div className="mt-4 space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+49 1521 4795072</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>info@feraiq.de</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Heilbronn, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold">Folgen Sie uns</h3>

            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-900 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-900 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-900 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} feraiQ. Alle Rechte vorbehalten.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-500">
            <a href="#" className="hover:text-sky-600">
              Impressum
            </a>
            <a href="#" className="hover:text-sky-600">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

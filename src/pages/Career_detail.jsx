import React from "react";
import { useParams, Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";

// image
import programing from "../assets/programing.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Career_detail = () => {
  const { slug } = useParams();
  const title = slug.split("-");
  const job_title = title
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Image */}
      <div className="overflow-hidden">
        <img
          src={programing}
          alt={job_title}
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Job Header */}
      <h1 className="mt-4 text-4xl font-semibold font-quicksand text-slate-900 py-10">
        {job_title} (m/w/d)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Aufgaben */}
          <Section
            title="Deine Aufgaben"
            items={[
              "Entwicklung moderner Webanwendungen",
              "Zusammenarbeit mit Backend-Teams",
              "Skalierbare Frontend-Architekturen aufbauen",
              "Verantwortung für Code-Qualität",
            ]}
          />
          {/* Anforderungen */}
          <Section
            title="Dein Profil"
            items={[
              "Abgeschlossenes Studium der Informatik, Wirtschaftsinformatik, Ingenieur- oder Naturwissenschaften",
              "Sehr gute Programmierkenntnisse in JavaScript/TypeScript sowie Erfahrung mit modernen Frontend Frameworks (z. B. React, Vue oder Angular)",
              "Teamfähigkeit und Eigeninitiative",
              "Gute Deutsch und Englischkenntnisse",
            ]}
          />
          {/* Benefits */}
          <Section
            title="Deine Aufgaben"
            items={[
              "Entwicklung moderner Webanwendungen",
              "Zusammenarbeit mit Backend-Teams",
              "Aufbau skalierbarer Frontend-Architekturen",
              "Verantwortung für Code-Qualität",
            ]}
          />
          {/* Social Media */}
          <div className="flex items-center gap-3 pt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all duration-300"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:info@feraiq.de"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300"
            >
              <TfiEmail size={18} />
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="border border-gray-300 rounded relative">
          <div className=" p-6 space-y-6 ">
            <div className="space-y-1">
              <h1 className="font-semibold">Arbeitgeber</h1>
              <h1>feraiQ GmbH</h1>
            </div>

            <h3 className="font-semibold mb-3">Über uns</h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Seit 2025 unterstützen wir Unternehmen mit professionellen
              IT-Services und individuellen Lösungen für moderne
              Geschäftsprozesse.
            </p>
            <div>
              <h1 className="font-semibold">Arbeitsort</h1>
              <h1 className="flex justify-start items-center gap-2">
                {" "}
                <FaLocationDot /> Heilbronner Straße 0, 74000 Heilbronn
              </h1>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Ansprechpartner</h3>

              <p className="font-medium mt-1">Mohammad Juma Qasimi</p>

              <p className="text-slate-600 text-sm">Head of Recruiting</p>
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <p className="flex justify-start items-center gap-2">
                <LuPhone /> +49 1521 479 5072
              </p>
              <p className="flex justify-start items-center gap-2">
                <TfiEmail /> bewerbung@feraiq.de
              </p>
            </div>

            <button className="w-full mt-6 bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition">
              Jetzt bewerben
            </button>
            <button className="w-full mt-6 bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition">
              <Link to={"/careers"}>← Zruck</Link>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
const Title = ({ title }) => {
  return <h2 className="font-quicksand font-semibold mb-5">{title}</h2>;
};
const Section = ({ title, items }) => {
  return (
    <>
      <Title title={title} />
      <ul
        className="space-y-3 text-slate-700 ml-10"
        style={{ listStyleType: "disc" }}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default Career_detail;

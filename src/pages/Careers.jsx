import React from "react";

import { Link } from "react-router-dom";

import programming from "../assets/programing.png";
import programming1 from "../assets/programing1.jpg";
import programming2 from "../assets/programing2.jpg";
import programming3 from "../assets/programing4.jpg";
import programming4 from "../assets/programing3.jpg";
import programming5 from "../assets/programing5.jpg";
import ansprochpartner from "../assets/ansprochpartner.jpg";
const jobs = [
  {
    title: "Frontend Developer (React)",
    slug: "frontend_developer_react",
    location: "Berlin / Remote",
    type: "Full-time",
    description:
      "Wir suchen einen React Developer mit Erfahrung in modernen Web-Apps und UI/UX Umsetzung.",
  },
  {
    title: "IT Support Specialist",
    slug: "it_support_specialist",
    location: "Berlin",
    type: "Full-time",
    description:
      "Unterstütze unsere Kunden bei technischen Problemen und IT-Infrastruktur Themen.",
  },
  {
    title: "Backend Developer (Node.js)",
    slug: "backend_developer_nodejs",
    location: "Remote",
    type: "part-time",
    description:
      "Entwicklung skalierbarer APIs und Backend-Systeme für moderne Anwendungen.",
  },
];

const Careers = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-14">
          <h1 className="text-xl md:text-3xl font-bold text-slate-900">
            Offene Stellen
          </h1>
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Wir suchen talentierte Menschen, die mit uns die Zukunft der IT
            gestalten möchten.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* JOBS */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded bg-white p-6 hover:border-sky-300 hover:shadow-sm transition"
              >
                {/* HEADER */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block text-xs font-medium text-sky-700 bg-sky-50 px-3 py-1 rounded-md">
                      {job.type}
                    </span>
                  </div>

                  <span className="text-xs text-slate-500">{job.location}</span>
                </div>

                {/* TITLE */}
                <h2 className="text-base font-semibold text-slate-900 leading-snug">
                  {job.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {job.description}
                </p>

                {/* FOOTER ACTION */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Vollständige Stelle ansehen
                  </span>

                  <button className="text-sm font-medium text-sky-600 hover:text-sky-700 transition">
                    <Link to={job.slug}>Bewerben →</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CONTACT BOX */}
          <div className=" h-fit">
            <h3 className="text-lg font-semibold text-slate-900">
              Deine Ansprechpartnerin --
            </h3>

            <img
              src={ansprochpartner}
              alt=""
              className="h-[300px] w-full mt-4 mb-4"
            />

            <p className="text-sm text-slate-600 leading-relaxed">
              Du hast Fragen zum Bewerbungsprozess oder zu offenen Stellen?
              Unsere HR Ansprechpartnerin hilft dir gerne weiter.
            </p>

            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p className="font-semibold">Mohammad Juma Qasimi</p>
              <p>jobs@feraiq.de</p>
              <p>0049 876 893 458</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
          {[
            {
              icon: "⚙️",
              title: "Modern Technology",
              text: "React, Node.js, Cloud & modern IT stacks.",
            },
            {
              icon: "🏠",
              title: "Flexible Work",
              text: "Remote, hybrid or office – you decide.",
            },
            {
              icon: "🤝",
              title: "Strong Team",
              text: "Open communication and real collaboration.",
            },
            {
              icon: "🤝",
              title: "Strong Team",
              text: "Open communication and real collaboration.",
            },
            {
              icon: "🤝",
              title: "Strong Team",
              text: "Open communication and real collaboration.",
            },
            {
              icon: "🤝",
              title: "Strong Team",
              text: "Open communication and real collaboration.",
            },
          ].map((item, i) => (
            <div key={i} className="p-8 border border-gray-200 rounded">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div className="mt-24 bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10 text-slate-900">
            Our Workspace
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              programming,
              programming1,
              programming2,
              programming3,
              programming4,
              programming5,
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-58 w-full object-cover hover:scale-103 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;

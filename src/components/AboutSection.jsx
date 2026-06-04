import React from "react";
import kabl from "../assets/kabl.png";

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-24">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold leading-tight text-slate-900 md:text-5xl">
        Fokussieren Sie sich auf Ihr Kerngeschäft{" "}
        <br className="hidden md:block" />
        <span className="md:text-slate-700">– wir kümmern uns um Ihre IT.</span>
      </h2>

      {/* Content */}
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Seit 2003 unterstützen wir Unternehmen mit professionellen
            IT-Services. Unser Ansatz ist einfach: maßgeschneiderte Lösungen,
            die sich konsequent an den individuellen Anforderungen unserer
            Kunden und Branchen orientieren.
            <br />
            <br />
            Dank langjähriger Erfahrung und der Zusammenarbeit mit Unternehmen
            aus unterschiedlichsten Bereichen verfügen wir über ein breites
            Fundament an Best Practices, um zuverlässige, effiziente und
            praxiserprobte Lösungen zu liefern.
            <br />
            <br />
            Wir übernehmen genau die Rolle, die Ihr Unternehmen benötigt: als
            ausgelagerte IT-Abteilung, als spezialisierte Unterstützung für Ihr
            internes IT-Team oder als strategischer Berater für Geschäftsführung
            und Entscheidungsträger.
            <br />
            <br />
            Als regionaler IT-Dienstleister betreuen wir Kunden in Rhein-Berg,
            Oberberg, Rhein-Sieg-Kreis sowie im Raum Köln – zuverlässig, schnell
            und persönlich.
          </p>

          {/* Button */}
          <div className="mt-10">
            <button className="rounded bg-[#1E2F97] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#162377] hover:shadow-lg">
              Zu unseren Leistungen
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 flex md:order-2">
          <img
            src={kabl}
            alt="IT Services Logo"
            className="w-full max-w-lg h-110 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import ITServiceOptions from "../components/ITServiceOptions";
import ContactUs from "./ContactUs";
import { FaArrowDownLong } from "react-icons/fa6";
const Services = () => {
  return (
    <section className="w-full">
      {/* Services */}
      <div className="max-w-7xl mx-auto -mt-15">
        <ITServiceOptions />
      </div>

      {/* About Services */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Warum feraiQ?
          </h2>

          <div className="space-y-6 text-slate-600 leading-8">
            <p>
              Seit 2025 unterstützen wir Unternehmen mit professionellen
              IT-Services. Unser Fokus liegt auf nachhaltigen Lösungen,
              persönlicher Betreuung und modernster Technologie.
            </p>

            <p>
              Ob IT-Infrastruktur, Cloud-Lösungen, Support oder strategische
              Beratung – wir entwickeln Konzepte, die exakt zu den Anforderungen
              unserer Kunden passen.
            </p>

            <p>
              Dank unserer Erfahrung aus zahlreichen Projekten in
              unterschiedlichsten Branchen profitieren unsere Kunden von
              bewährten Prozessen und Best Practices.
            </p>

            <p>
              Unser Ziel ist es, IT einfach, sicher und effizient zu gestalten,
              damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-sky-700">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Benötigen Sie Unterstützung?</h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Unser Team berät Sie gerne zu Ihren IT-Anforderungen und findet die
            passende Lösung für Ihr Unternehmen.
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-sky-800 rounded-lg font-semibold hover:bg-slate-100 transition">
            <span className="flex justify-center items-center gap-1">
              {" "}
              Jetzt Kontakt aufnehmen{" "}
              <FaArrowDownLong className="animate-bounce" />
            </span>
          </button>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-7xl mx-auto px-6 md:py-20">
        <ContactUs />
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Sie möchten Ihre interne IT durch einen IT-Dienstleister ersetzen?",
    link: "/services/outsourcing",
  },
  {
    title:
      "Sie sind unzufrieden mit Ihrem bisherigen IT-Dienstleister und wollen wechseln?",
    link: "/services/provider-change",
  },
  {
    title: "Sie suchen Unterstützung für Ihre interne IT in Spezialthemen?",
    link: "/services/specialized-support",
  },
];

const ITServiceOptions = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center  font-quicksand font-extrabold">
        <span className="text-sm uppercase tracking-widest text-brand-color">
          Ihr zuverlässiger IT-Partner vor Ort
        </span>

        <h2 className="mt-4 text-3xl leading-tight text-slate-900 md:text-5xl ">
          Kontinuierliche IT-Betreuung und Support
        </h2>

        <p className="mt-4 text-lg text-slate-700 md:text-xl ">
          Individuell auf die Bedürfnisse Ihres Unternehmens zugeschnitten.
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg ">
          Suchen Sie einen zuverlässigen Partner für die kontinuierliche
          Betreuung Ihrer IT-Infrastruktur? Mit flexiblen Vertragsmodellen und
          individuellen Servicekonzepten bieten wir passgenaue IT-Lösungen für
          die Anforderungen Ihres Unternehmens.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.link}
            title={service.title}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ITServiceOptions;

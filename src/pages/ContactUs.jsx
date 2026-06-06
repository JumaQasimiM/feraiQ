import React from "react";

// icons
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const ContactUs = () => {
  const contactInfo = [
    {
      title: "Besuchen Sie uns:",
      description: "Heilbronner Straße 0, 74000 Heilbronn",
      icon: <IoLocationOutline />,
    },
    {
      title: "Rufen Sie an:",
      description: "0049 1521 4795072",
      icon: <BsTelephoneForward />,
    },
    {
      title: "Per E-Mail",
      description: "info@feraiQ.com",
      icon: <TfiEmail />,
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-12 space-y-5">
          <h1 className="text-lg font-semibold text-sky-800">KONTAKT</h1>
          <h2 className="text-xl md:text-4xl mt-2 font-bold">
            Wir helfen Ihnen weiter
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            feraiQ ist ein IT-Systemhaus mit Sitz in Overath. Von hier aus
            betreut smartworx Kunden deutschlandweit. Sie haben eine Frage? Wir
            freuen uns auf Ihre Nachricht oder Anruf!
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-8 space-y-5 border border-gray-300 rounded "
            >
              <div className="text-3xl flex justify-center text-sky-900 mb-6">
                {info.icon}
              </div>
              <h3 className="font-semibold text-xl">{info.title}</h3>
              <p className="text-gray-600 mt-2">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

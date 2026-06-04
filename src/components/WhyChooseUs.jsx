import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { FaUser } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BiTimer } from "react-icons/bi";
const WhyChooseUs = () => {
  const whyChooseUsItem = [
    {
      title: "Langjährige Erfahrung",
      description:
        "Seit 2025 kümmern wir uns um jegliche IT-Belange unserer Kunden - immer mit dem Ziel der langfristigen Zusammenarbeit.",
      icon: <FiFileText size={50} />,
    },
    {
      title: "Gute Erreichbarkeit & Reaktionszeit",
      description:
        "Gute Erreichbarkeit ist für uns das A und O. Schnelle Reaktionszeit ist ebenso Standard - bei Bedarf auch 24/7.",
      icon: <BiTimer size={50} />,
    },
    {
      title: "ösungsorientierte Arbeitsweise",
      description:
        "Wir kümmern uns um Ihre IT-Probleme und Herausforderungen - zielgerichtet, schnell und wirtschaftlich.",
      icon: <FiFileText size={50} />,
    },
  ];
  return (
    <section className="w-full bg-gray-100 py-5 my-10 ">
      <div className="w-full md:max-w-7xl mx-auto px-5 py-5 md:my-10 text-center space-y-10 font-quicksand font-extrabold">
        <h1 className="text-2xl md:text-5xl pb-1 md:pb-10">
          Warum Sie sich <br />
          für feraiQ entscheiden sollten
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whyChooseUsItem.map((item, index) => (
            <WhyChooseUsCard
              key={index}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
        <button className="py-4 px-10 bg-[#1e2f97] text-white">
          Jetzt beraten lassen
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;

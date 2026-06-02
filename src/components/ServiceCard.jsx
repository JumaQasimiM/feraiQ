import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, link }) => {
  return (
    <div className="text-center group flex flex-col justify-between rounded bg-white p-8 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 leading-snug selection:bg-[#1E2F97] selection:text-white">
          {title}
        </h3>
      </div>

      <Link
        to={link}
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#1E2F97] px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-[#17257a]"
      >
        Mehr erfahren
      </Link>
    </div>
  );
};

export default ServiceCard;

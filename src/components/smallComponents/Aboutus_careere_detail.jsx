import { FaLocationDot } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

export const Aboutus_careere_detail = () => {
  return (
    //  {/* Sidebar */}
    <aside className="border border-gray-300 rounded relative">
      <div className=" p-6 space-y-6 ">
        <div className="space-y-1">
          <h1 className="font-semibold">Arbeitgeber</h1>
          <h1>feraiQ GmbH</h1>
        </div>

        <h3 className="font-semibold mb-3">Über uns</h3>

        <p className="text-sm text-slate-600 leading-relaxed">
          Seit 2024 unterstützen wir Unternehmen mit professionellen IT-Services
          und individuellen Lösungen für moderne Geschäftsprozesse.
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

        <a href="mailto:bewerbung@feraiq.de">
          <button className="w-full mt-6 bg-[#1E2F97] text-white py-3 rounded-lg hover:bg-[#2237c0] transition">
            Jetzt bewerben
          </button>
        </a>
        <Link to={"/careers"}>
          <button className="w-full mt-6 bg-[#1E2F97] text-white py-3 rounded-lg hover:bg-[#2237c0] transition">
            ← Zruck
          </button>
        </Link>
      </div>
    </aside>
  );
};

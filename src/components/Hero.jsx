import ParticlesComponent from "./ParticlesComponent";
import logo from "../assets/logo-trans.png";

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-[#1E2F97] via-[#2d46c5] to-[#3c63ff]">
      {/* Particles */}
      <ParticlesComponent id="hero-particles" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Background Logo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-contain bg-left opacity-10 z-[2]"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center lg:justify-end px-4 md:px-10">
        <div
          className="
            max-w-4xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            rounded-xl
            p-8 md:p-12
            shadow-2xl
          "
        >
          {/* Badge */}
          <span
            className="
              inline-block
              px-4 py-2
              rounded-full
              bg-white/10
              border border-white/20
              text-white
              text-sm
              mb-6
            "
          >
            Dein IT-Systemhaus in Öhringen
          </span>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight font-quicksand">
            IT-Lösungen, die
            <br />
            einfach funktionieren
          </h1>

          {/* Description */}
          <p className="mt-6 text-white/80 text-lg leading-relaxed hidden md:block">
            Von IT-Support über Cloud-Lösungen bis hin zur kompletten
            Systembetreuung – wir sorgen dafür, dass Ihre IT zuverlässig und
            zukunftssicher funktioniert.
          </p>
          {/* description - mobile */}
          <p className="mt-6 text-white/80 text-lg leading-relaxed md:hidden">
            IT-Support, Cloud & Sicherheit aus einer Hand.
          </p>
          {/* Benefits */}
          {/* desktop */}
          <ul className="mt-8 space-y-4 text-white/90 hidden md:block">
            <li>
              ✓ Schneller IT-Support – kompetente Hilfe, wenn Sie sie brauchen
            </li>

            <li>
              ✓ Transparente Betreuung – volle Kontrolle über Systeme, Kosten
              und Verträge
            </li>

            <li>✓ Moderne Hardware & Software – alles aus einer Hand</li>

            <li>
              ✓ Höchste Sicherheit – Schutz für Ihre Daten und IT-Infrastruktur
            </li>
          </ul>
          {/* mobile */}
          <ul className="mt-8 space-y-3 text-white/90 md:hidden">
            <li>✓ Schneller IT-Support</li>
            <li>✓ Transparente Betreuung</li>
            <li>✓ Hardware & Software aus einer Hand</li>
            <li>✓ Höchste Datensicherheit</li>
          </ul>

          {/* CTA Section */}
          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6">
            <button
              className="
                px-8 py-4
                rounded-xl
                bg-white
                text-[#1E2F97]
                font-semibold
                shadow-lg
                hover:scale-105
                transition-all
              "
            >
              Kostenlos beraten lassen
            </button>

            <div className="text-white">
              <p className="text-sm text-white/70">
                Für kurzfristige Unterstützung
              </p>

              <h3 className="text-xl font-bold">+49 1521 000 000</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent z-10" />
    </section>
  );
};

export default Hero;

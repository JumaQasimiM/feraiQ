import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
            },
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },

      particles: {
        color: {
          value: "#ffffff",
        },

        links: {
          color: "#ffffff",
          distance: 190,
          enable: true,
          opacity: 0.3,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
          random: true,
          outModes: {
            default: "bounce",
          },
        },

        number: {
          density: {
            enable: true,
          },
          value: 120,
        },

        opacity: {
          value: 1,
        },

        shape: {
          type: "circle",
        },

        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },

      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles id={id} options={options} className="absolute inset-0 z-0" />
  );
};

export default ParticlesComponent;

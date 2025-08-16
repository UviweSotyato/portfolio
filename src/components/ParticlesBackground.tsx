import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  darkMode: boolean;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: darkMode ? "#1a1a1a" : "#f9fafb" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: darkMode ? "#ffffff" : "#000000" },
          links: {
            color: darkMode ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: { enable: true },
          move: { direction: "none", enable: true, outModes: "bounce", speed: 1 },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

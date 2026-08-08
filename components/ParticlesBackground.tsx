"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
            },
          },

          color: {
            value: ["#22d3ee", "#3b82f6", "#a855f7"],
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 150,
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.2,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
import React, { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import { useCallback as useCallbackReact } from "react";
import { Container, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";

const particlesConfig: ISourceOptions = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.2,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out"
      },
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.3
        }
      }
    }
  },
  background: {
    color: {
      value: "transparent"
    }
  },
  detectRetina: true
};

export function MagicParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      className="fixed inset-0 pointer-events-none"
    />
  );
}
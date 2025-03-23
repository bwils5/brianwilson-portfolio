import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function BackgroundWrapper({ children }) {
  const [shouldRenderParticles, setShouldRenderParticles] = useState(true);

  useEffect(() => {
    // Check if device is mobile or has low performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const hasLowPerformance = window.navigator.hardwareConcurrency <= 4;
    
    if (isMobile || hasLowPerformance) {
      setShouldRenderParticles(false);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient"></div>

      {/* Particles - Conditionally rendered */}
      {shouldRenderParticles && (
        <Particles
          options={{
            background: { color: "transparent" },
            particles: {
              number: { value: 40 }, // Reduced from 80
              size: { value: 3 },
              move: { 
                enable: true, 
                speed: 1.5, // Reduced from 2
                outModes: { default: "out" }
              },
              links: { 
                enable: true, 
                color: "#ffffff",
                opacity: 0.4,
                distance: 150
              },
              color: { value: "#ffffff" },
            },
            interactivity: {
              events: { 
                onHover: { 
                  enable: true, 
                  mode: "repulse",
                  parallax: { enable: true, force: 60, smooth: 10 }
                }
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4
                }
              }
            },
            fpsLimit: 60,
            detectRetina: true
          }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BackgroundWrapper;

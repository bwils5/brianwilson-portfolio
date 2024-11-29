import Particles from "react-tsparticles";

function BackgroundWrapper({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient"></div>

      {/* Particles */}
      <Particles
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: { enable: true, color: "#ffffff" },
            color: { value: "#ffffff" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BackgroundWrapper;

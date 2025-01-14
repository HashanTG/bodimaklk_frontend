import React, { useRef } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Simple tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top;  // y position within the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 will-change-transform cursor-pointer hover:shadow-2xl"
      style={{ minHeight: 280 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={icon} alt="" className="h-12 mb-4" draggable={false} />
      <h3 className="font-bold text-lg text-gray-900 mb-2 text-center">{title}</h3>
      <p className="text-gray-500 text-center text-sm">{description}</p>
    </div>
  );
};

const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-16 px-4 bg-white overflow-hidden">
      {/* Yellow lines background image */}
      {/* <img
        src="/yellow-lines.png"
        alt=""
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-48 object-cover z-0"
        aria-hidden="true"
        draggable={false}
      /> */}

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Heading */}
        <div className="flex flex-wrap items-center justify-center mb-10">
          
          <img
            src="/WhyChoose.png"
            alt="bodimak.lk"
            className="h-8 md:h-10 inline-block align-middle"
            style={{ marginBottom: "3px" }}
            draggable={false}
          />
          
        </div>

        {/* Cards container */}
        <div className="  p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-4 items-stretch justify-center">
          <FeatureCard
            icon="/userFrinedly.png"
            title="User-Friendly"
            description="Our advanced spyware detection engine can identify if a device contains spyware or bugging software."
          />
          <FeatureCard
            icon="/compehensive.png"
            title="Comprehensive Features"
            description="Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords)."
          />
          <FeatureCard
            icon="/shield.png"
            title="Secure & Reliable"
            description="Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

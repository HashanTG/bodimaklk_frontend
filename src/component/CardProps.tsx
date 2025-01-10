import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string[];
  image: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, image }) => (
  <div className="bg-white rounded-xl border-2 border-yellow-300 shadow-md flex flex-col h-full transition-transform hover:scale-105">
    <div className="flex items-center gap-2 px-6 pt-6">
      <img src={icon} alt="" className="h-6 w-6" />
      <span className="font-bold text-lg">{title}</span>
    </div>
    <div className="px-6 pt-2 pb-4 flex-1">
      {description.map((line, idx) => (
        <div key={idx} className="text-gray-700 text-sm">
          {line}
        </div>
      ))}
    </div>
    <div className="px-6 pb-6">
      <img src={image} alt="" className="w-full h-28 object-contain" />
    </div>
  </div>
);

const HomeSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white">
      {/* Yellow background image */}
      <img
        src="/yellow-bg.png"
        alt=""
        className="absolute left-0 top-[80px] w-full h-[340px] object-cover pointer-events-none select-none z-0"
        aria-hidden="true"
        draggable={false}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-8 flex flex-col items-center">
        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card
            icon="/tenant-icon.png"
            title="Tenants"
            description={[
              "Discover Your Next Room",
              "Find Your Match",
              "Stay Updated",
            ]}
            image="/tenant-illustration.png"
          />
          <Card
            icon="/manager-icon.png"
            title="Property Managers"
            description={[
              "Discover Your Next Room",
              "Find Your Match",
              "Stay Updated",
            ]}
            image="/manager-illustration.png"
          />
          <Card
            icon="/admin-icon.png"
            title="Admins"
            description={[
              "Discover Your Next Room",
              "Find Your Match",
              "Stay Updated",
            ]}
            image="/admin-illustration.png"
          />
        </div>

        {/* Main Section Text */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mt-8 mb-2 drop-shadow-lg">
          Find, Manage, and Control – All in One Place!
        </h2>
      </div>
    </section>
  );
};

export default HomeSection;

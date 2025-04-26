import React from "react";
import Hero from "../component/Hero";
import DescriptHero from "../component/DescriptHero";

const home: React.FC = () => {
  return (
      <div>
      <Hero />
      <DescriptHero/>
    </div>
  );
};

export default home;

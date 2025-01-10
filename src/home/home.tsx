import React from "react";
import Hero from "../component/Hero";
import DescriptHero from "../component/DescriptHero";
import CardProps from "../component/CardProps";

const home: React.FC = () => {
  return (
      <div>
      <Hero />
      <DescriptHero />
      <CardProps/>
    </div>
  );
};

export default home;

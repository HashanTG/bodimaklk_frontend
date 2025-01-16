import React from "react";
import Hero from "../component/Hero";
import DescriptHero from "../component/DescriptHero";
import CardProps from "../component/CardProps";
import WhyChooseSection from "../component/WhyChooseSection";

const home: React.FC = () => {
  return (
      <div>
      <Hero />
      <DescriptHero />
      <CardProps />
      <WhyChooseSection/>
    </div>
  );
};

export default home;

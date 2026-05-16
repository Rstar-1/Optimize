import React from "react";
import PageHero from "../../components/PageHero";
import MachineShowcase from "../home/components/MachineShowcase";
import WhyChooseUs from "../home/components/WhyChooseUs";

const Solutions = () => {
  return (
    <main className="solutions-page">
      <PageHero 
        title="SOLUTIONS" 
        subtitle="Advanced Engineering Solutions for Global Enterprises" 
      />
      <MachineShowcase />
      <WhyChooseUs />
    </main>
  );
};

export default Solutions;

import React from "react";
import PageHero from "../../components/PageHero";
import IndustriesContent from "../home/components/Industries";
import Clients from "../home/components/Clients";

const IndustriesPage = () => {
  return (
    <main className="industries-page">
      <PageHero 
        title="INDUSTRIES" 
        subtitle="Specialized Engineering Excellence Across Sectors" 
      />
      <IndustriesContent />
      <Clients />
    </main>
  );
};

export default IndustriesPage;

import React from "react";
import PageHero from "../../components/PageHero";
import ContactContent from "../home/components/Contact";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <PageHero 
        title="CONTACT" 
        subtitle="Connect With Our Global Engineering Experts" 
      />
      <ContactContent />
    </main>
  );
};

export default ContactPage;

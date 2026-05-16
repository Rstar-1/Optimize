import React from 'react';

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="text-outline">{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="large-typography">{title}</div>
    </section>
  );
};

export default PageHero;

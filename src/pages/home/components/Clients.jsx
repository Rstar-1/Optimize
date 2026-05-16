import React from 'react';

const clients = [
  'SIEMENS', 'TESLA', 'BOEING', 'AIRBUS', 'TATA STEEL', 
  'RENAULT', 'GENERAL ELECTRIC', 'LOCKHEED MARTIN', 'ABB'
];

const Clients = () => {
  return (
    <section className="clients">
      <div className="marquee">
        <div className="marquee-content">
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="client-logo">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: 'Precision Engineering',
    desc: 'Our state-of-the-art facilities ensure sub-micron accuracy in every component we manufacture.',
    icon: '🎯'
  },
  {
    id: 2,
    title: 'Global Tech Partners',
    desc: 'Collaborating with industry leaders like Siemens and Tesla to bring you the future of industrial tech.',
    icon: '🌐'
  },
  {
    id: 3,
    title: 'Advanced Manufacturing',
    desc: 'Utilizing AI-driven robotics and sustainable energy to power next-gen production lines.',
    icon: '⚙️'
  },
  {
    id: 4,
    title: 'Industry Expertise',
    desc: 'A century of knowledge combined with a passion for innovation and engineering excellence.',
    icon: '🛡️'
  },
  {
    id: 5,
    title: 'After Sales Support',
    desc: '24/7 global support network ensuring your operations never experience unplanned downtime.',
    icon: '🛠️'
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      
      gsap.fromTo(q('.feature-card'), 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
          }
        }
      );

        // Card glow effect on hover
      const cards = q('.feature-card');
      const handlers = [];
      
      cards.forEach(card => {
        const handleMouseMove = (e) => {
          const { left, top } = card.getBoundingClientRect();
          const x = e.clientX - left;
          const y = e.clientY - top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        };
        card.addEventListener('mousemove', handleMouseMove);
        handlers.push({ card, handleMouseMove });
      });

      return () => {
        handlers.forEach(({ card, handleMouseMove }) => {
          card.removeEventListener('mousemove', handleMouseMove);
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-choose-us section-premium" ref={sectionRef}>
      <div className="industrial-grid"></div>
      <div className="container">
        <div className="section-header text-center">
          <h3 className="section-subtitle text-orange">Why Partner With Us</h3>
          <h2 className="section-title">The Engineering Standard For The Global Market</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="large-typography">ADVANTAGE</div>
    </section>
  );
};

export default WhyChooseUs;

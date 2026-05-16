import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { id: 1, name: 'Aerospace', image: '/images/industry-aerospace.png', size: 'large' },
  { id: 2, name: 'Automobile', image: '/images/industry-automobile.png', size: 'small' },
  { id: 3, name: 'Defence', image: '/images/industry-defence.png', size: 'small' },
  { id: 4, name: 'Power Generation', image: '/images/hero-bg.png', size: 'medium' }, // Reusing hero for power
  { id: 5, name: 'Iron & Steel', image: '/images/industry-steel.png', size: 'medium' },
  { id: 6, name: 'Heavy Engineering', image: '/images/about-detail.png', size: 'small' },
];

const Industries = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      
      gsap.fromTo(q('.industry-card'), 
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );

      // Magnetic cursor effect on cards
      const cards = q('.industry-card');
      const handlers = [];

      cards.forEach(card => {
        const inner = card.querySelector('.industry-card-inner');
        if (!inner) return;

        const handleMouseMove = (e) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = (e.clientX - left - width / 2) * 0.1;
          const y = (e.clientY - top - height / 2) * 0.1;
          gsap.to(inner, {
            x: x,
            y: y,
            duration: 0.3
          });
        };

        const handleMouseLeave = () => {
          gsap.to(inner, {
            x: 0,
            y: 0,
            duration: 0.5
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        handlers.push({ card, handleMouseMove, handleMouseLeave });
      });

      return () => {
        handlers.forEach(({ card, handleMouseMove, handleMouseLeave }) => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="industries section-premium" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center">
          <h3 className="section-subtitle text-orange">Specialized Industries</h3>
          <h2 className="section-title">Engineering Excellence Across Sectors</h2>
        </div>

        <div className="industry-bento">
          {industries.map((item) => (
            <div key={item.id} className={`industry-card ${item.size}`}>
              <div className="industry-card-inner">
                <img src={item.image} alt={item.name} />
                <div className="industry-overlay"></div>
                <div className="industry-info">
                  <h4>{item.name}</h4>
                  <div className="industry-link">Explore Sector →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="large-typography">SECTORS</div>
    </section>
  );
};

export default Industries;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      
      // Animate image reveal
      gsap.fromTo(q('.about-image-inner'), 
        { clipPath: 'inset(0 100% 0 0)' },
        { 
          clipPath: 'inset(0 0% 0 0)', 
          duration: 1.5, 
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
          }
        }
      );

      // Animate content
      gsap.fromTo(q('.about-content > *'), 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
          }
        }
      );

      // Counter animation
      countersRef.current.forEach((counter) => {
        if (!counter) return;
        const target = parseInt(counter.getAttribute('data-target'));
        gsap.fromTo(counter, 
          { innerText: 0 },
          { 
            innerText: target, 
            duration: 2, 
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 90%',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  return (
    <section className="about section-premium" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-inner">
              <img src="/images/about-detail.png" alt="Engineering Detail" />
              <div className="about-experience">
                <span className="number" data-target="90" ref={addToRefs}>90</span>
                <span className="text">+ Years Of Experience</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h3 className="section-subtitle text-orange">About Our Company</h3>
            <h2 className="section-title">Redefining The Limits Of Modern Engineering</h2>
            <p>
              Founded on the principles of precision and innovation, we have been at the 
              forefront of industrial technology for over nine decades. Our commitment 
              to excellence drives us to deliver solutions that are not just efficient, 
              but visionary.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4 className="number" data-target="5000" ref={addToRefs}>5000</h4>
                <span>Installations</span>
              </div>
              <div className="stat-item">
                <h4 className="number" data-target="25" ref={addToRefs}>25</h4>
                <span>Industries Served</span>
              </div>
              <div className="stat-item">
                <h4 className="number" data-target="100" ref={addToRefs}>100</h4>
                <span>Global Partners</span>
              </div>
            </div>

            <button className="btn btn-outline">Learn More About Us</button>
          </div>
        </div>
      </div>
      <div className="large-typography">PRECISION</div>
    </section>
  );
};

export default About;

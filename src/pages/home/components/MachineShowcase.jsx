import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Precision Milling Center',
    image: '/images/machine-showcase.png',
    specs: ['Axis: 5-Axis', 'Spindle Speed: 20k RPM', 'Precision: 0.001mm']
  },
  {
    id: 2,
    name: 'Automated Welding Cell',
    image: '/images/industry-automobile.png',
    specs: ['Robots: 2x KUKA', 'Cycle Time: 45s', 'Max Payload: 150kg']
  },
  {
    id: 3,
    name: 'Advanced Smelting Unit',
    image: '/images/industry-steel.png',
    specs: ['Temp: 1800°C', 'Capacity: 50 Tons', 'Energy Efficiency: 94%']
  },
  {
    id: 4,
    name: 'Turbine Testing Rig',
    image: '/images/industry-aerospace.png',
    specs: ['Max Thrust: 100kN', 'Sensors: 1000+ Channels', 'Real-time Simulation']
  }
];

const MachineShowcase = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const horizontal = horizontalRef.current;
      if (!container || !horizontal) return;

      const q = gsap.utils.selector(container);
      const sections = q('.product-panel');
      
      const mainTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${horizontal.offsetWidth}`,
        }
      });

      // Animate product elements on enter
      sections.forEach((section) => {
        const info = section.querySelector('.product-content');
        if (info) {
          gsap.fromTo(info, 
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                containerAnimation: mainTween,
                start: 'left center',
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="machine-showcase" ref={containerRef}>
      <div className="horizontal-container" ref={horizontalRef}>
        <div className="showcase-header">
          <h2 className="large-title text-outline">Showcase</h2>
          {/* <h3>Precision Engineering</h3> */}
        </div>
        
        {products.map((product) => (
          <section key={product.id} className="product-panel">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="hotspot" style={{ top: '30%', left: '40%' }}>
                <div className="hotspot-pulse"></div>
                <div className="hotspot-label">High-Speed Spindle</div>
              </div>
            </div>
            <div className="product-content">
              <span className="product-id">0{product.id}</span>
              <h2 className="product-name">{product.name}</h2>
              <ul className="product-specs">
                {product.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
              <button className="btn btn-primary">View Technical Sheet</button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MachineShowcase;

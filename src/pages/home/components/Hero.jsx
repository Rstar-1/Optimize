import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current) return;
      const q = gsap.utils.selector(heroRef.current);
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(bgRef.current,
        { scale: 1, filter: 'brightness(1)' },
        { scale: 1, filter: 'brightness(1)', duration: 2 }
      )
        .fromTo(overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 }, "-=1.5"
        )
        .fromTo(q('.reveal-inner'),
          { y: '100%' },
          { y: '0%', duration: 1.2, stagger: 0.1 }, "-=1"
        )
        .fromTo(subtitleRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 1 }, "-=0.8"
        )
        .fromTo(q('.hero-btns'),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 1 }, "-=0.8"
        )
        .fromTo(q('.scroll-indicator'),
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1, repeat: -1, yoyo: true }, "-=0.5"
        );

      // Parallax effect
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg" ref={bgRef}>
        <img src="/images/hero-bg.png" alt="Industrial Hero" />
      </div>

      <div className="container">
        <div style={{ width: '100%' }} className='hero-contents'>
          <h1 className="hero-title " ref={titleRef}>
            <div className="text-reveal">
              <span className="reveal-inner">Engineering</span>
            </div>
            <div className="text-reveal">
              <span className="reveal-inner text-orange">Manufacturing</span>
            </div>
          </h1>

          <p className="hero-subtitle" ref={subtitleRef}>
            We deliver world-class industrial solutions that empower global enterprises
            with cutting-edge technology and unmatched engineering excellence.
          </p>

          <div className="hero-btns">
            <button className="btn btn-primary">Explore Solutions</button>
            <button className="btn btn-outline">Contact Experts</button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll To Explore</span>
      </div>

      <div className="large-typography">INDUSTRIAL</div>
    </section>
  );
};

export default Hero;

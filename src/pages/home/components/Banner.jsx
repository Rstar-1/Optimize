import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../../generic/Container";
import Button from "../../../generic/Button";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    // Blur-in effect for background image
    gsap.fromTo(bgRef.current, 
      { filter: "blur(10px)", scale: 1.05, opacity: 0 },
      { filter: "blur(0px)", scale: 1, opacity: 1, duration: 1.2, ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Slide-right effect for the content
    gsap.fromTo(contentRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <img
        ref={bgRef}
        src="https://html.ditsolution.net/industry/indastre8/assets/images/slider/slider-bg.png"
        alt="Banner"
        className="w-full object-cover h-650 bg-forth flex"
      />
      <div className="absolute top-0 left-0 w-full">
        <Container version="v1" className="h-650 flex items-center">
          <div ref={contentRef} className="w-50">
            <div className="flex items-center gap-9">
              <span className="dot bg-warning"></span>
              <p className="para-text text-white uppercase">
                Welcome to Industry
              </p>
            </div>
            <h1 className="large-text text-white font-600 uppercase pt-20">
              Solutions Industrial Market Values for Funding
            </h1>
            <Button
              text="Get Started Now"
              version="v1"
              bg="warning"
              className="mt-40"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

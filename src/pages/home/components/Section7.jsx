import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../../generic/Container";
import Button from "../../../generic/Button";

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const bg = bgRef.current;

    // Background parallax effect
    gsap.fromTo(
      bg,
      { y: "-20%" },
      {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Text reveal effect
    gsap.fromTo(
      text.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden py-100" style={{ padding: "100px 0" }}>
      {/* Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          height: "140%",
          background: "url('https://chimerical-gumption-fb54a4.netlify.app/static/media/banner.2d5ea0077210e67e5d6a.png') center/cover no-repeat",
          zIndex: -1
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}></div>
      </div>

      <Container version="v1" className="relative z-10 text-center">
        <div ref={textRef} className="w-70 mx-auto" style={{ margin: "0 auto" }}>
          <p className="headpara-text text-warning font-500 uppercase">
            Let's Work Together
          </p>
          <h2 className="large-text text-white font-700 pt-20 leading-tight">
            Ready to Take Your Industrial Business to the Next Level?
          </h2>
          <p className="para-text text-white font-400 mt-20 opacity-80">
            Our expert team is ready to provide cutting-edge solutions tailored to your unique manufacturing needs.
          </p>
          <div className="mt-40">
            <Button text="Get a Free Quote" version="v1" bg="warning" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section7;

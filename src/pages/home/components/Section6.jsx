import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../../generic/Container";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Smart Factory Automation",
    category: "Industrial",
    image: "https://html.ditsolution.net/industry/indastre6/assets/images/resource/blog3.png",
  },
  {
    id: 2,
    title: "Eco-Friendly Manufacturing",
    category: "Engineering",
    image: "https://html.ditsolution.net/industry/indastre6/assets/images/resource/blog1.png",
  },
  {
    id: 3,
    title: "Advanced Robotics",
    category: "Technology",
    image: "https://html.ditsolution.net/industry/indastre6/assets/images/resource/blog2.png",
  },
];

const Section6 = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0, rotateX: -15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup scroll trigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Container version="v1" className="py-80 bg-light" style={{ backgroundColor: "#f8f9fa" }}>
      <div ref={sectionRef}>
        <p className="headpara-text text-warning font-500 text-center uppercase">
          Our Portfolio
        </p>
        <h2 className="head-text text-dark font-600 capitalize text-center pt-10">
          Featured Projects Showcase
        </h2>

        <div className="grid-cols-3 gap-12 mt-50">
          {PROJECTS_DATA.map((project, i) => (
            <div 
              key={project.id} 
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-white rounded-5 overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <div className="relative group cursor-pointer overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-300 object-cover flex"
                  style={{ transition: "transform 0.5s ease" }}
                />
                <div 
                    className="absolute bottom-0 left-0 w-full p-14 bg-white"
                    style={{ zIndex: 2 }}
                >
                  <p className="text-warning font-500 small-text">{project.category}</p>
                  <h3 className="mid-text text-dark font-500 pt-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section6;

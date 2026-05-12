import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../../generic/Container";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const cardsRef = useRef([]);

  const achievements = [
    {
      id: 1,
      count: "30+",
      label: "Expert Engineers",
      icon: "https://html.ditsolution.net/industry/indastre1/assets/images/resource/coun-icon1.png",
    },
    {
      id: 2,
      count: "100+",
      label: "Successful Projects",
      icon: "https://html.ditsolution.net/industry/indastre1/assets/images/resource/coun-icon1.png",
    }
  ];

  useEffect(() => {
    const el = sectionRef.current;
    
    // Slide right for left content
    gsap.fromTo(leftContentRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Scale up bounce for cards
    gsap.fromTo(cardsRef.current,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)", delay: 0.2,
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
    <Container version="v1" className="py-80">
      <div className="flex items-center w-full" ref={sectionRef}>
        <div className="w-50" ref={leftContentRef}>
          <div className="flex items-center gap-9">
            <span
              style={{
                width: "30px",
                height: "2px",
                background: "var(--warning)",
              }}
            ></span>
            <p className="para-text text-warning uppercase">ACHIEVEMENTS</p>
          </div>
          <h2 className="head-text text-dark font-600 uppercase pt-10">
            Company Top Achievements
          </h2>
        </div>

        <div className="w-50 grid-cols-2 gap-12">
          {achievements?.map((item, i) => (
            <div 
              key={i} 
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-white p-20 rounded-5"
            >
              <div className="flex items-center gap-10">
                <div className="w-25">
                  <img
                    src={item?.icon}
                    alt={item?.label}
                    className="object-contain"
                  />
                </div>
                <div className="w-75">
                  <h3 className="text-dark title-text font-600">
                    {item?.count}
                  </h3>
                  <p className="text-gray para-text font-500 mt-3">
                    {item?.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section2;

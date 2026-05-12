import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../../generic/Container";
import Button from "../../../generic/Button";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  
  const stats = [
    {
      id: 1,
      count: "30+",
      label: "Expert Engineers",
      icon: "https://html.ditsolution.net/industry/indastre1/assets/images/resource/coun-icon1.png",
    },
    {
      id: 2,
      count: "25+",
      label: "Years Experience",
      icon: "https://html.ditsolution.net/industry/indastre1/assets/images/resource/coun-icon1.png",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;

    // Image slide from left
    gsap.fromTo(imgRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Content slide from right
    gsap.fromTo(contentRef.current,
      { x: 50, opacity: 0 },
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
    <Container version="v1" className="py-80">
      <div className="flex items-center gap-12 w-full" ref={sectionRef}>
        <div className="w-50 pr-10" ref={imgRef}>
          <img
            src="https://html.ditsolution.net/industry/indastre1/assets/images/about/about-thumb.png"
            alt="about company"
            className="w-full h-550 object-cover flex rounded-5"
          />
        </div>

        <div className="w-50 pl-15" ref={contentRef}>
          <div className="flex items-center gap-9">
            <span
              style={{
                width: "30px",
                height: "2px",
                background: "var(--warning)",
              }}
            ></span>
            <p className="headpara-text text-warning uppercase">About Us</p>
          </div>

          <h2 className="large-text text-dark font-600 capitalize pt-10">
            Build Your Full Projects Management
          </h2>

          <p className="para-text text-gray font-500 mt-22">
            Competently develop accurate methods of empowerment through
            enterprise-wide action items. Monotonectally enhance seamless
            meta-services after accurate e-markets. Distinctively extend
            standardized channels.
          </p>

          <div className="mt-30 grid-cols-2 gap-12 w-90">
            {stats?.map((item, i) => (
              <div key={i} className="bg-white p-15 rounded-5">
                <div className="flex items-center gap-10">
                  <div className="w-25 flex justify-center">
                    <img
                      src={item?.icon}
                      alt={item?.label}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-75">
                    <h3 className="text-dark title-text font-600 leading-none">
                      {item?.count}
                    </h3>
                    <p className="text-gray para-text font-600 mt-6">
                      {item?.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-30">
            <Button text="Learn More About Us" version="v1" bg="warning" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;

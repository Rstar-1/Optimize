import React, { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../../generic/Container";

gsap.registerPlugin(ScrollTrigger);

const BLOG_DATA = [
  {
    id: 1,
    date: "October 19, 2024",
    title: "Digitalization Of Manufacturing For The Industry",
    image:
      "https://html.ditsolution.net/industry/indastre6/assets/images/resource/blog1.png",
    category: "Industrial",
  },
  {
    id: 2,
    date: "October 22, 2024",
    title: "Strategy For Pre-Industrial Engineering Solution",
    image:
      "https://html.ditsolution.net/industry/indastre6/assets/images/resource/blog2.png",
    category: "Engineering",
  },
  {
    id: 3,
    date: "October 25, 2024",
    title: "The Importance of Quality Control in Production",
    image:
      "https://html.ditsolution.net/industry/indastre6/assets/images/resource/blog3.png",
    category: "Manufacturing",
  },
];

const BlogCard = memo(({ blog, cardRef }) => {
  return (
    <div ref={cardRef} className="bg-white rounded-5 mx-5 overflow-hidden">
      <div className="relative">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-250 object-cover flex"
        />
        <p className="absolute bottom-0 left-0 bg-warning text-white px-15 py-5 font-500 para-text">
          {blog?.category}
        </p>
      </div>

      <div className="p-20">
        <p className="para-text text-gray font-500">{blog?.date}</p>
        <h3 className="title-text text-dark font-600 pt-10 line-clamp2">
          {blog?.title}
        </h3>
        <p className="para-text text-gray font-500 mt-10">
          Reliably coordinate prospective catalysts for change through
          revolutionary supply chains.
        </p>
        <div className="mt-14 bordh pt-15">
          <p className="text-warning font-500 para-text cursor-pointer">
            Read More +
          </p>
        </div>
      </div>
    </div>
  );
});

const Section5 = memo(() => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;

    // Header slide up fade
    gsap.fromTo(headerRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Cards slide up fade
    gsap.fromTo(cardsRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Container
      version="v1"
      className="py-50"
      style={{
        background:
          "url(https://html.ditsolution.net/industry/indastre5/assets/images/resource/testi_bg01.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="" ref={sectionRef}>
        <div ref={headerRef}>
          <p className="headpara-text text-warning font-500 text-center">
            Latest News
          </p>
          <h2 className="head-text text-dark font-600 capitalize text-center pt-10">
            Read Our Latest Blog Posts
          </h2>
        </div>

        <div className="grid-cols-3 gap-12 mt-40">
          {BLOG_DATA?.map((blog, i) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              cardRef={(el) => (cardsRef.current[i] = el)} 
            />
          ))}
        </div>
      </div>
    </Container>
  );
});

export default Section5;

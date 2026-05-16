import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    id: 1,
    quote: "Optimize has transformed our production line efficiency by 40%. Their precision engineering is unmatched in the aerospace sector.",
    author: "Robert Vance",
    role: "COO, Aerospace Systems"
  },
  {
    id: 2,
    quote: "The integration of AI-driven robotics into our factory was seamless. A true partner in the future of manufacturing.",
    author: "Sarah Jenkins",
    role: "Engineering Director, AutoTech"
  },
  {
    id: 3,
    quote: "Exceptional support and visionary technology. They don't just provide machines; they provide competitive advantages.",
    author: "Michael Chen",
    role: "CEO, Global Smelting"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section-premium">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <h2 className="quote-text">{item.quote}</h2>
                <div className="quote-author">
                  <span className="name">{item.author}</span>
                  <span className="role">{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="large-typography">VOICE</div>
    </section>
  );
};

export default Testimonials;

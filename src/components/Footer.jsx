import React from "react";
import Container from "../generic/Container";
import Button from "../generic/Button";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaChevronRight, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container version="v1" className="py-50">
        <div className="grid-cols-4 gap-12">
          <div>
            <img
              src="https://html.ditsolution.net/industry/indastre1/assets/images/logo2.png"
              alt="Logo"
              className="w-12 h-12"
            />
            <p className="text-white small-text font-400 mt-22">
              Competently are disseminate high-qualityfu whereas viral
              functionalities building engin user friendly markets through
            </p>
          </div>

          <div>
            <h3 className="text-white title-text font-500">Our Services</h3>
            <p className="text-white mini-text">● ● ●</p>
            <div className="mt-20 grid-cols-1 gap-12">
              {[
                "Roboting Works",
                "Mechanical Works",
                "Metal Farmings",
                "Commercial Roofing",
                "Architecture",
              ].map((item) => (
                <p
                  key={item}
                  className="text-white font-400 small-text cursor-pointer"
                >
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white title-text font-500">Latest Blog</h3>
            <p className="text-white mini-text">● ● ●</p>
            <div className="grid-cols-1 gap-12 mt-20">
              <BlogItem
                image="https://html.ditsolution.net/industry/indastre1/assets/images/resource/ricend1.png"
                title="Top 10 Most Popular CNG Fas Company..."
                date="Jun 12, 2024"
              />
              <BlogItem
                image="https://html.ditsolution.net/industry/indastre1/assets/images/resource/ricend2.png"
                title="How to Resize Metals for the Construction..."
                date="Jun 12, 2024"
              />
            </div>
          </div>

          <div>
            <h3 className="text-white title-text font-500">Enquiry</h3>
            <p className="text-white mini-text">● ● ●</p>
            <p className="mt-8 text-white small-text font-400">
              Register now to get latest updates on promotions & coupons.
            </p>
            <div className="mt-10 grid-cols-1 gap-12">
              <input
                type="email"
                placeholder="Enter E-Mail"
                className="w-full bg-white text-gray h-input rounded-5 border-0"
              />
               <Button text="Subscribe" version="" bg="warning" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

const BlogItem = ({ image, title, date }) => (
  <div className="flex items-center gap-12 cursor-pointer">
    <img
      src={image}
      alt="blog"
      className="common-image object-cover flex rounded-5"
    />
    <div className="">
      <h4 className="text-white headmini-text font-500">{title}</h4>
      <p className="text-white font-400 mini-text mt-6">{date}</p>
    </div>
  </div>
);

export default Footer;

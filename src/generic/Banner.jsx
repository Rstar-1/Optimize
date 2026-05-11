import React from "react";
import Container from "./Container";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://html.ditsolution.net/industry/indastre1/assets/images/slider/banner.jpg"
        alt="Banner"
        className="w-full object-cover h-450 bg-forth flex"
      />
      <div className="absolute top-0 left-0 w-full">
        <Container version="v1" className="h-450 flex items-center">
          <div className="w-50">
            <div className="flex items-center gap-9">
              <span className="dot bg-warning"></span>
              <p className="para-text text-white uppercase">
                About Us
              </p>
            </div>
            <h2 className="large-text text-white font-600 uppercase pt-20">
              Solutions Industrial Market Values for Funding
            </h2>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

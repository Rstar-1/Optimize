import React from "react";
import Container from "../../../generic/Container";
import Button from "../../../generic/Button";

const Banner = () => {
  return (
    <div className="relative">
      {/* <img
            src="https://chimerical-gumption-fb54a4.netlify.app/static/media/banner.2d5ea0077210e67e5d6a.png"
            alt="Banner"
            className="w-full object-cover h-600 bg-forth flex"
          /> */}
      <img
        src="https://html.ditsolution.net/industry/indastre8/assets/images/slider/slider-bg.png"
        alt="Banner"
        className="w-full object-cover h-650 bg-forth flex"
      />
      {/* <img
        src="https://html.ditsolution.net/industry/indastre1/assets/images/slider/banner.jpg"
        alt="Banner"
        className="w-full object-cover h-650 bg-forth flex"
      /> */}
      <div className="absolute top-0 left-0 w-full">
        <Container version="v1" className="h-650 flex items-center">
          <div className="w-50">
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

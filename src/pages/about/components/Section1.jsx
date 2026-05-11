import React from "react";
import Container from "../../../generic/Container";
import Button from "../../../generic/Button";

const Section1 = () => {
  return (
    <Container version="v1" className="py-50">
      <div className="flex items-center gap-12 w-full">
        <div className="w-50 pr-10">
          <img
            src="https://html.ditsolution.net/industry/indastre1/assets/images/about/about-thumb.png"
            alt="about company"
            className="w-full h-500 object-cover flex rounded-5"
          />
        </div>

        <div className="w-50 pl-15">
          <div className="flex items-center gap-9">
            <span
              style={{
                width: "30px",
                height: "2px",
                background: "var(--warning)",
              }}
            ></span>
            <p className="headpara-text text-warning uppercase">Know More</p>
          </div>

          <h2 className="large-text text-dark font-600 capitalize pt-10">
            Management Team
          </h2>

          <p className="headpara-text text-gray font-400 mt-22">
            MTI has a strong management team who have considerable experience in
            working with the Indian Industry. Our team includes well qualified
            individuals across sales, service, finance, logistics &
            administration.
            <br />
            <br />
            Day to day monitoring of the field staff is an essential aspect
            which is done professionally & through latest technology.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Section1;

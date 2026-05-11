import React from "react";
import Section1 from "./components/Section1";
import Banner from "../../generic/Banner";
import SectionHome from "../home/components/Section2";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Patch from "../../components/Patch";

const About = () => {
  return (
    <>
      <Banner />
        <div>
        <div
          style={{
            background:
              "url(https://html.ditsolution.net/industry/indastre1/assets/images/resource/counter_bg.jpg)",
              backgroundSize: "cover",
          }}
        >
          <SectionHome />
        </div>
        <img
          src="https://html.ditsolution.net/industry/indastre1/assets/images/resource/line-shape.png"
          alt="line shape"
          className="w-full flex"
        />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Patch />
    </>
  );
};

export default About;

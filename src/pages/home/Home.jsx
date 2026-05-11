import React from "react";
import Banner from "./components/Banner";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Patch from "../../components/Patch";
import Testimonials from "../../components/Testimonials";

const Home = () => {
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
          <Section2 />
        </div>
        <img
          src="https://html.ditsolution.net/industry/indastre1/assets/images/resource/line-shape.png"
          alt="line shape"
          className="w-full flex"
        />
      </div>
      <Section3 />
      <Section4 />
      <Testimonials />
      <Section5 />
      <Patch />
    </>
  );
};

export default Home;

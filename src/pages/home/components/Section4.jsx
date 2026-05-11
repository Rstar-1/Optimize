import React from "react";
import Container from "../../../generic/Container";

const Section4 = () => {
  const services = [
    {
      id: 1,
      title: "Industrial Engineering",
      icon: "https://html.ditsolution.net/industry/indastre6/assets/images/resource/service-icon1.png",
      description:
        "Temp incidunt ut labore et dolore magna aliqua uat enim ad minim veniama produce quis",
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      icon: "https://html.ditsolution.net/industry/indastre6/assets/images/resource/service-icon2.png",
      description:
        "Competently develop accurate methods of empowerment through enterprise-wide action items.",
    },
    {
      id: 3,
      title: "Product Manufacturing",
      icon: "https://html.ditsolution.net/industry/indastre6/assets/images/resource/service-icon3.png",
      description:
        "Competently develop accurate methods of empowerment through enterprise-wide action items.",
    },
    {
      id: 4,
      title: "Power & Energy",
      icon: "https://html.ditsolution.net/industry/indastre6/assets/images/resource/service-icon1.png",
      description:
        "Temp incidunt ut labore et dolore magna aliqua uat enim ad minim veniama produce quis",
    },
  ];

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
      <div className="">
        <p className="headpara-text text-warning font-500 text-center capitalize">
          What We Offer
        </p>
        <h2 className="head-text text-dark font-600 capitalize text-center pt-10">
          Service Expertise Your Business
        </h2>

        <div className="grid-cols-4 gap-12 mt-50">
          {services?.map((service, i) => (
            <div key={i} className="bg-white p-26 rounded-5 mx-10">
              <img
                src={service?.icon}
                alt="service icon"
                className="object-contain"
              />
              <h3 className="mid-text text-dark font-600 pt-15">
                {service?.title}
              </h3>
              <p className="para-text text-gray font-500 mt-20">
                {service?.description}
              </p>
              <p className="mt-20 text-warning font-500 para-text">Read More</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section4;

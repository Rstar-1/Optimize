import React from "react";
import Container from "../../../generic/Container";

const Section3 = () => {
  const historyData = [
    {
      year: "Since 1990",
      title: "Since Founding",
      desc: "Started as a small engineering firm focusing on local industrial solutions.",
    },
    {
      year: "Since 2012",
      title: "Regional Expansion",
      desc: "Expanded operations to cover major industrial zones across the country.",
    },
    {
      year: "Since 2023",
      title: "First History",
      desc: "Reached a milestone of 100+ successful projects in the manufacturing sector.",
    },
    {
      year: "Since 2025",
      title: "Digital Integration",
      desc: "Integrated AI and IoT solutions into our core industrial service offerings.",
    },
  ];

  return (
    <Container version="v1" className="py-80">
      <p className="headpara-text text-warning font-500 text-center capitalize">
        What We Offer
      </p>
      <h2 className="head-text text-dark font-600 capitalize text-center pt-10">
        Service Expertise Your Business
      </h2>
      <div className="mt-40">
        <hr style={{ height: "3px" }} className="bg-warning border-0" />
        <div className="grid-cols-4 gap-4 relative">
          {historyData?.map((item, index) => (
            <div key={index}>
              <p
                className="dot bg-warning rounded-full"
                style={{ marginTop: "-15px" }}
              ></p>
              <div className="py-10">
                <p className="text-warning mini-text font-400 mt-10">
                  {item.year}
                </p>
                <h4 className="title-text text-dark font-600 pt-6">
                  {item.title}
                </h4>
                <p className="mt-5 text-gray small-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section3;

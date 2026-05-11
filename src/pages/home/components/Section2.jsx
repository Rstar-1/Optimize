import React from "react";
import Container from "../../../generic/Container";

const Section2 = () => {
  const achievements = [
    {
      id: 1,
      count: "30+",
      label: "Expert Engineers",
      icon: "https://html.ditsolution.net/industry/indastre1/assets/images/resource/coun-icon1.png",
    },
    {
      id: 2,
      count: "100+",
      label: "Successful Projects",
      icon: "https://html.ditsolution.net/industry/indastre1/assets/images/resource/coun-icon1.png",
    }
  ];

  return (
    <Container version="v1" className="py-80">
      <div className="flex items-center w-full">
        <div className="w-50">
          <div className="flex items-center gap-9">
            <span
              style={{
                width: "30px",
                height: "2px",
                background: "var(--warning)",
              }}
            ></span>
            <p className="para-text text-warning uppercase">ACHIEVEMENTS</p>
          </div>
          <h2 className="head-text text-dark font-600 uppercase pt-10">
            Company Top Achievements
          </h2>
        </div>

        <div className="w-50 grid-cols-2 gap-12">
          {achievements?.map((item, i) => (
            <div key={i} className="bg-white p-20 rounded-5">
              <div className="flex items-center gap-10">
                <div className="w-25">
                  <img
                    src={item?.icon}
                    alt={item?.label}
                    className="object-contain"
                  />
                </div>
                <div className="w-75">
                  <h3 className="text-dark title-text font-600">
                    {item?.count}
                  </h3>
                  <p className="text-gray para-text font-500 mt-3">
                    {item?.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section2;

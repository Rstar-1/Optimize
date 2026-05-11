import React from "react";
import Container from "../../../generic/Container";

const Section2 = () => {
  const colors = {
    orange: "#ff5e14",
    navy: "#001d3d",
    text: "#555555",
    border: "#eeeeee",
    lightBg: "#f9f9f9",
  };

  // Inline Styles
  const containerStyle = {
    padding: "80px 10%",
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    backgroundColor: "#fff",
    color: colors.navy,
  };

  const headerGroupStyle = {
    marginBottom: "40px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "0 0 10px 0",
  };

  const orangeLine = {
    width: "50px",
    height: "4px",
    backgroundColor: colors.orange,
    border: "none",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
    marginBottom: "60px",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: `1px solid ${colors.border}`,
    fontSize: "15px",
    color: colors.text,
  };

  const iconCircle = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor: colors.lightBg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "15px",
    color: colors.orange,
    fontSize: "18px",
  };
  return (
    <Container version="v1" className="">
      <div className="grid-cols-4 items-start gap-12">
        <div className="border-ec p-20 rounded-5">
          <h4 className="mid-text text-dark font-600 uppercase">
            QUALIFICATIONS
          </h4>
          <div
            style={{
              position: "relative",
              height: "120px",
              width: "120px",
              margin: "auto",
              border: `8px solid ${colors.orange}`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mt-12"
          >
            <span style={{ fontWeight: "bold" }}>45%</span>
          </div>
          <p className="mini-text text-gray mt-20">Dip(Engg)</p>
        </div>
        <div className="border-ec p-20 rounded-5">
          <h4 className="mid-text text-dark font-600 uppercase">DISCIPLINES</h4>
          <div
            style={{
              position: "relative",
              height: "120px",
              width: "120px",
              margin: "auto",
              border: `8px solid ${colors.navy}`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mt-12"
          >
            <span style={{ fontWeight: "bold" }}>58%</span>
          </div>
          <p className="mini-text text-gray mt-20">Mechanical</p>
        </div>
      </div>
      <div className="grid-cols-3 items-start gap-12 mt-40">
        <div>
          <div>
            <h2 className="title-text text-dark font-600 uppercase">
              Management Team
            </h2>
            <hr
              className="border-0 bg-warning mx-1 mt-8"
              style={{ width: "80px", height: "5px" }}
            />
          </div>
          {[
            "Workstations with latest software",
            "State of the Art secure office",
            "4 Mbps online connectivity",
            "FTP facility for individual customers",
          ].map((item, i) => (
            <div key={i} className="flex items-center p-8 bordb w-max">
              <p style={iconCircle}>🏢</p>
              <p className="text-gray small-text">{item}</p>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h2 className="title-text text-dark font-600 uppercase">
              Service Network
            </h2>
            <hr
              className="border-0 bg-warning mx-1 mt-8"
              style={{ width: "80px", height: "5px" }}
            />
          </div>
          {[
            "100 dedicated service personnel",
            "All trained at principals' works",
            "Average of 15+ years experience",
            "Mixed engineering disciplines",
          ].map((item, i) => (
            <div key={i} className="flex items-center p-8 bordb w-max">
              <p style={iconCircle}>✔</p>
              <p className="text-gray small-text">{item}</p>
            </div>
          ))}
        </div>

        <div>
          <div>
            <h2 className="title-text text-dark font-600 uppercase">
              Our People
            </h2>
            <hr
              className="border-0 bg-warning mx-1 mt-8"
              style={{ width: "80px", height: "5px" }}
            />
          </div>
          {[
            "220 dedicated people",
            "70 committed service experts",
            "65 motivated sales personnel",
          ].map((item, i) => (
            <div key={i} className="flex items-center p-8 bordb w-max">
              <p style={iconCircle}>👤</p>
              <p className="text-gray small-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section2;

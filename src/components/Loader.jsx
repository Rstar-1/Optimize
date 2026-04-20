import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjust as needed
        textAlign: "center"
      }}
    >
      <div
        style={{
          width: "3rem",
          height: "3rem",
          border: "4px solid rgba(0,0,0,0.1)",
          borderTop: "4px solid #007bff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}
      ></div>
      <p style={{ marginTop: "10px", color: "#6c757d", fontSize: "16px" }}>
        Loading...
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
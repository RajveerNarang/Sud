import React from "react";

const Main = () => {
  const mystyle = {
    background: "linear-gradient(87.03deg, #07E807 2.63%, #0C310C 100.2%)",
    border: "1px solid #FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };
  return (
    <div className="main">
      <div
        style={{
          backgroundImage: "url(/Ellipse.png)",
          position: "absolute",
          width: "500px",
          height: "450px",
          left: "0px",
          top: "100px",
          blurRadius: "50px",
        }}
        className="col"
      >
        <h2>
          <span style={{ color: "#49B649" }}>SAVING</span> YOUR MONEY FOR TRAVEL
          THROUGH TRAVEL FUND
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          ab cumque, dignissimos labore optio hic vitae iure? Voluptate sunt
          omnis quos alias neque eius consectetur iste perfere laborum? Cum.
        </p>
        <button type="button" style={{ width: "197px", left: "104.62px" }}>
          Save now
        </button>
        <button type="button" style={{ width: "296px", left: "334px" }}>
          UI UX Case Study
        </button>
      </div>

      {/*2nd part*/}
      <div className="col">
        <img
          style={{
            // position: "absolute",
            position: "relative",
            width: "500px",
            height: "350px",
            left: "560px",
            top: "-104px",
            // bottom: "-350px",
            background:
              "linear-gradient(130deg, rgba(73, 182, 73, 0.5) 0%, rgba(73, 182, 73, 0) 100%)",
            tranform: "rotate(-1.54deg)",
            borderRadius: "120px 30px 40px 30px",
          }}
          src={"images/ww.png"}
        />
        <img
          style={{
            position: "absolute",
            // position: "relative",
            width: "342px",
            height: "543px",
            left: "829px",
            top: "130px",
            // transform: "scaleX(1)",
            // borderRadius: "143px",
            // transform: "matrix(0, 1, 1, 0, 0, 0)",
          }}
          src={"images/girl.png"}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Main;

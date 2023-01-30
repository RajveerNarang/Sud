import React from "react";

const Header = () => {
  const mystyle = {
    background: "linear-gradient(87.03deg, #07E807 2.63%, #0C310C 100.2%)",
    border: "1px solid #FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };
  return (
    <div className="header">
      <div className="logo" style={{ height: "107px", width: "107px" }}>
        <img src={"images/logo.png"} alt="image" />
      </div>
      <nav className="navigation">
        <ul>
          <li style={{ color: "#49B649" }}>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/save">Save</a>
          </li>
          <li>
            <a href="/travel">Travel</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/wallet">Wallet</a>
          </li>
          <button type="button" style={mystyle}>
            Contact Us
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

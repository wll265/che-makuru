import React from "react";

const Header = () => (
  <header
    className="masthead"
    style={{
      backgroundImage: 'url("assets/img/mw-dj.jpg")'
    }}
  >
    <div style={{ backgroundColor: "rgba(0,0,0,.5)"}} className="container">
      <div
        className="intro-text"
        style={{
          opacity: 1,
          filter: "blur(0px)",
          paddingRight: "60px",
          paddingLeft: "60px"
        }}
      >
        <h1
          className="text-capitalize"
          style={{
            fontSize: "45.5px",
            fontFamily: "Kaushan Script"
          }}
        >
          welcome to che makuru event masters
        </h1>
        <span
          style={{
            fontSize: "26px",
            textAlign: "center",
            textTransform: "capitalize",
            fontFamily: "Roboto Slab"
          }}
        >
          TURNING IDEAS INTO ACTION
        </span>
        <div className="intro-heading text-uppercase">
          <span />
        </div>
        <a
          className="btn btn-primary btn-xl text-uppercase"
          role="button"
          href="#about"
          style={{
            fontSize: "12px",
            width: "140.7px",
            height: "51.2px",
            padding: "16px 18px",
            borderRadius: "48px",
            fontFamily: "Kaushan Script"
          }}
        >
          LEARN MORE
        </a>
      </div>
    </div>
  </header>
);

export default Header;

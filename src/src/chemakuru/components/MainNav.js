import React from "react";
import Brand from "./Brand";
import NavItem from "./NavItem";

const MainNav = () => (
  <nav
    className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark"
    id="mainNav"
  >
    <div className="container">
      <Brand></Brand>
      <button
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        className="navbar-toggler navbar-toggler-right"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto text-uppercase">
          <NavItem></NavItem>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              <i
                className="fa fa-photo"
                style={{
                  marginRight: "10px",
                  fontSize: "16px"
                }}
              />
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              <i
                className="fa fa-info-circle"
                style={{
                  marginRight: "10px",
                  fontSize: "16px"
                }}
              />
              About
            </a>
          </li>
          <li className="nav-item" />
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              <i
                className="fa fa-phone"
                style={{
                  fontSize: "16px",
                  marginRight: "10px"
                }}
              />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default MainNav;

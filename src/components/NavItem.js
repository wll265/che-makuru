import React from "react";

const NavItem = () => (
  <li className="nav-item">
    <a className="nav-link" href="#services">
      <i
        className="fa fa-briefcase"
        style={{
          fontSize: "16px",
          marginRight: "10px"
        }}
      />
      Services
    </a>
  </li>
);

export default NavItem;
